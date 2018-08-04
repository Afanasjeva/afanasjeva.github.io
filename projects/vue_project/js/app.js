new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns : [],

    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            this.monsterAttacs(3, 10);
            if (this.checkWin()){
                return;
            }

            var damage = this.calculateDamage(5, 12);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,

            });
            this.checkWin();
        },
        monsterAttacs: function(min, max){
            var damage = this.calculateDamage(min, max);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage,
            });
        },
        specialAttack: function(){
            this.monsterAttacs(3, 10);
            if (this.checkWin()){
                return;
            }
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage,
            });
            this.checkWin();
        },
        heal: function(){
            if (this.playerHealth <= 90) {this.playerHealth += 10} else {this.playerHealth = 100}
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
            });
            this.monsterAttacs(3, 10);
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max((Math.floor(Math.random() * max) + 1), min);
        },
        checkWin: function(){
            if (this.playerHealth <=0){
                if(confirm('You lost! New game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.monsterHealth <=0){
                if(confirm('You won! New game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
    },
});