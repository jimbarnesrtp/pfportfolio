import Vue from 'vue'
import Vuex from 'Vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    players: [],
    currentPlayer: 0,
    playerUp: -1,
    round: 1,
    conditions: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addPlayer(state) {
      state.players.push({ name: $('#name').val(), init: $('#init').val(), bonus: $('#bonus').val() });
      state.players.sort(function(a, b){return sortPlayers(a,b)});
      $('#name').val('');
      $('#init').val('');
      $('#bonus').val('');

    },
    setCurrentPlayer(state, n) {
      state.currentPlayer = n;
    },
    updatePlayer(state, n) {
      state.players[state.currentPlayer].bonus = n.bonus;
      state.players[state.currentPlayer].init = n.init;
      state.players.sort(function(a, b){return sortPlayers(a,b)});
    },
    reset(state) {
      var arrayLength = state.players.length;
      for (var i = 0; i < arrayLength; i++) {
         //state.players[i].bonus=0;
         state.players[i].init=0;
      } 
      state.playerUp = -1;
      state.round = 1;
      state.conditions = [];
    },
    clear(state) {
      state.players = [];
      state.playerUp = -1;
      state.round = 1;
      state.conditions = [];
    },
    changePlayer(state) {
      state.playerUp++;
      if(state.playerUp < state.players.length) {
        
      } else {
        state.playerUp = 0;
        state.round++;
        var arrayLength = state.conditions.length;
        for (var i = 0; i < arrayLength; i++) {
          if(state.conditions[i].active < state.conditions[i].total) {        
           state.conditions[i].active++;
          } else {
            state.conditions.splice(i,1);
          }
        }
      }
      
    },
    addCondition(state) {
      state.conditions.push({ player: $('#player').val(), name: $('#conName').val(), total: $('#rounds').val(), active:0 });
      $('#player').val('');
      $('#conName').val('');
      $('#rounds').val('');

    }
    
  },
  actions: {
    addPlayer (context) {      
      context.commit('addPlayer');
    },
    setCurrentPlayer (context, n) {
      context.commit('setCurrentPlayer', n);
    },
    updatePlayer (context, n) {
      context.commit('updatePlayer', n);
    },
    addCondition(context) {
      context.commit('addCondition');
    }
  }
})