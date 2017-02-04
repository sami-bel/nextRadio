define(["knockout", "text!./index.html", "hasher", "bootstrap", "bootbox", "socketio"], function (ko, template, hasher, bootstrap, bootbox, io) {
  function channelViewModel(params) {
    var self = this;

    self.socket = io();
    self.socket.connect("http://localhost:1337");//, { autoConnect: true});

    self.requestJoin = function() {
        self.getUser( function(id){
            self.socket.emit('join-channel', { name : self.name(), idUser : id})
        });
    };

    self.getUser = function(callback){
      var idUser;
      $.get('/auth/user').done(function(id) {
          idUser = id;
          callback(idUser);
      });
    };

    // Add a connect listener
    self.socket.on('connect',function() {
        console.log('Client has connected to the server!');
        self.requestJoin();
    });

    // Add a connect listener
    self.socket.on('message',function(data) {
      console.log('Received a message from the server!',data);
       self.messages.push(data);
       $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });

    // Add a disconnect listener
    self.socket.on('disconnect',function() {
      console.log('The client has disconnected!');
    });

    // Sends a message to the server via sockets
    function sendMessageToServer(message) {
      socket.send(message);
    };
    
    self.id = ko.observable(params.id);
    self.name = ko.observable(params.name);

    self.entry = ko.observable();
    self.messages = ko.observableArray();
    self.owner = ko.observable();


    self.Load = function () {
        $.get('/api/channel/messages/' + self.name()).done(function(items) {
            self.messages(items);

            $('#messages').animate({scrollTop: $('#messages').get(0).scrollHeight}, 3000);
        }).fail(function(err) {
          if(err.responseJSON.status == 401){
            bootbox.confirm("Join channel ?", function(result) {
              if(result)
              {
                $.post("/api/channel/join/" + self.name()).done(function() {
                  self.Load();
                });
              }
            });
          }
        });
    }

    self.enterPost = function(d,e) {
      if(e.keyCode === 13)
        self.Post();
      return true;
    }
    
    self.Post = function() {
      $.ajax({
          type: "POST",
          url : "/api/channel/post/" + self.name(),
          contentType : 'application/json',
          dataType : 'json',
          data : JSON.stringify({ content : self.entry()}),
          success : function(item) {
            // self.messages.push(item);
            self.entry("");
          },
          error : function(err) {
            console.log(err);
          }
      });
    }
    

    self.Load();
  }
  
  return { viewModel: channelViewModel, template: template };
});