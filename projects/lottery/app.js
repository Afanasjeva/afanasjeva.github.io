var Lottery = function(){
    this.users = [];
    var lottery = this;
    this.$form = document.getElementById('form');
    this.$winnersBtn = document.getElementById('winners-btn');
    this.$users = document.getElementById('users');
    this.$winners = document.getElementById('winners');
    this.possibleInputs = ['name','surname','email','phone','birthday'];

    this.addUserRow = function(user, container){
        var elem = document.createElement('div');
        elem.classList.add('user-row');
        elem.setAttribute('id', 'user-row-' + user.id);

        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            lottery.users.splice(user.id, 1);
        });

        var editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', function(){
            editPopup.open(user);
        });

        this.possibleInputs.forEach(function(el){
            var subElem = document.createElement('div');
            subElem.setAttribute('id', 'user-' + user.id + '-prop-' + el);
            subElem.innerHTML = user[el];
            elem.appendChild(subElem);
        });

        var subElem = document.createElement('div');
        subElem.appendChild(editBtn);
        subElem.appendChild(deleteBtn);

        elem.appendChild(subElem);

        container.appendChild(elem);
    };

    this.initForm = function(){
        this.$form.addEventListener('submit', function(e){
            e.preventDefault();
            var user = {};
            lottery.possibleInputs.forEach(function(el){
                user[el] = document.getElementById(el).value;
            });
            user.id = lottery.users.length;
            lottery.users.push(user);
            lottery.addUserRow(user, lottery.$users);
            lottery.clearForm();
        });
    };
    this.clearForm = function(){
        this.possibleInputs.forEach(function(el){
            document.getElementById(el).value = '';
        });
        document.getElementById(lottery.possibleInputs[0]).focus();
    };

    this.initWinnersBtn = function(){
        this.$winnersBtn.addEventListener('click', function(){
           lottery.newWinner();
        });
    };

    this.newWinner = function(){
        var index = Math.round(Math.random()*(lottery.users.length - 1));
        lottery.users[index].winner = true;
        lottery.addUserRow(lottery.users[index], lottery.$winners);
    };

    this.changeUserRow = function(id){
        var $row = document.getElementById('user-row-' + id);
        var user;
        lottery.users.forEach(function(el){
            if (el.id === id) user = el;
        });

        lottery.possibleInputs.forEach(function(el){
            document.getElementById("user-" + id + "-prop-" + el).innerHTML = user[el];
        });
    };

    this.init = function(){
        this.initForm();
        this.initWinnersBtn();
    };
    this.init();
};
var lottery = new Lottery();

var EditPopup = function () {
  self = this;
  this.$popup = document.getElementById('edit-popup');
  this.$form = document.getElementById('edit-form');
  this.$closeBtn = document.getElementById('edit-close');
  this.open = function(user){
      this.user = user;
      lottery.possibleInputs.forEach(function(el){
          var id = 'edit-'+el;
          document.getElementById(id).value = user[el];
      });
      this.$popup.classList.add('active');
  };
  this.close = function(){
      this.$popup.classList.remove('active');
  };
  this.initCloseBtn = function(){
      this.$closeBtn.addEventListener('click', function(){
          self.close();
      });
  };
  this.initForm = function(){
      this.$form.addEventListener('submit', function(e){
          e.preventDefault();
          lottery.users.forEach(function(user){
              if (user.id === self.user.id){
                  lottery.possibleInputs.forEach(function(el){
                      user[el] = document.getElementById('edit-'+el).value;
                  });
              }
          });
          self.close();
          lottery.changeUserRow(self.user.id);
      });
  };
  this.init = function(){
      this.initCloseBtn();
      this.initForm();
  };
  this.init();
};
var editPopup = new EditPopup();