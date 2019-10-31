
let app = new Vue({
  el: '#app',
  data: {
    gameMode: 'start',
    name: '',
    players: [],
    choice: '',
    possibility: 1,
    error: '',
    isError: false,
    rounds: [],
    round: 1
  },
  methods: {
    startGame: function () {
      this.gameMode = 'start';
      this.players = [];
      this.isError = false;
      error: '';

    },
    playGame: function () {
      this.gameMode = 'play';
      this.loadGame();
    },
    addPlayer: function () {
      this.players.push(this.name);
      this.name = '';
    },
    loadGame: function () {
      if (this.players.length > 0) {
        this.choice = this.players[Math.floor(Math.random() * this.players.length)];
        this.possibility = 1 / this.players.length;
        this.rounds.push({
          number: this.round++,
          winner: this.choice,
          stat: this.possibility,
          players: this.players,
        })
      } else {
        this.isError = true;
        this.error = 'Please enter a name';
      }

    },
    deleteRound: function (roundNumber) {
      console.log('Invoked deleteRound from root Vue instance');
      function isMatchingRound(round) {
        return round.number != this;
      }
      this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
    }
  }
});