var Lottery = function(){
    var users = [];
    var lottery = this;
    this.$form = document.getElementById('form');
    this.$winnersBtn = document.getElementById('winners-btn');
    this.$users = document.getElementById('users');
    this.$winners = document.getElementById('winners');
    var possibleInputs = ['name','surname','email','phone','birthday'];

    this.addUserRow = function(user, container){
        var elem = document.createElement('div');
        elem.classList.add('user-row');

        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            users.splice(user.id, 1);
        });
        elem.appendChild(deleteBtn);
        
        possibleInputs.forEach(function(el){
            var subElem = document.createElement('div');
            subElem.innerHTML = user[el];
            elem.appendChild(subElem);
        });
        var subElem = document.createElement('div');
        subElem.appendChild(deleteBtn);
        elem.appendChild(subElem);

        container.appendChild(elem);
    };

    this.initForm = function(){
        this.$form.addEventListener('submit', function(e){
            e.preventDefault();
            var user = {};
            possibleInputs.forEach(function(el){
                user[el] = document.getElementById(el).value;
            });
            user.id = users.length;
            users.push(user);
            lottery.addUserRow(user, lottery.$users);
            lottery.clearForm();
        });
    };
    this.clearForm = function(){
        possibleInputs.forEach(function(el){
            document.getElementById(el).value = '';
        });
        document.getElementById(possibleInputs[0]).focus();
    };

    this.initWinnersBtn = function(){
        this.$winnersBtn.addEventListener('click', function(){
           lottery.newWinner();
        });
    };

    this.newWinner = function(){
        var index = Math.round(Math.random()*(users.length - 1));
        users[index].winner = true;
        lottery.addUserRow(users[index], lottery.$winners);
    };

    this.init = function(){
        this.initForm();
        this.initWinnersBtn();
    };
    this.init();
};
var lottery = new Lottery();