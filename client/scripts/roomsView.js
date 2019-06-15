var RoomsView = {

  $roomButton: $('#roomButton'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.populateRoomSelector();
    RoomsView.$roomButton.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleRoomSelect);
    $('#add_room_tab').on('click', RoomsView.handleAddRoomTab);
  },

  handleAddRoom: function(event) {
    console.log("Room added button")
    App.room = document.getElementById("roomName").value;
    App.rooms.push(App.room);
    RoomsView.populateRoomSelector();
    RoomsView.$select.val(App.room);
    App.refresh();
    Rooms.add();
  },

  populateRoomSelector: function(){
    RoomsView.$select.empty();
    // RoomsView.$select.append($(`<option value='Main'>Main Room</option>`));
    for(let room of App.rooms){
      RoomsView.$select.append($("<option></option>").attr("value", room).text(room));
    }
  },

  handleRoomSelect: function(event){
    App.room = event.target.value;
    // Parse.readRoom((data)=>{
    //   MessagesView.messages = data.results;
    // MessagesView.populateMessages();
    // });
    MessagesView.populateMessages();
    $('.tab.selected').text(App.room);
  },

  renderRoom: function(roomName) {
    App.rooms.push(roomName);
    RoomsView.$select.append($("<option></option>").attr("value", roomName).text(roomName));
  },
  
  handleAddRoomTab: function(event){
    console.log(event);
    //render new chats div
    var $chats = Rooms.renderChatsDiv({roomname: ''});
    console.log($chats);
    // $('.chats_container').append($chats);
    App.room = App.defaultRoom;
    MessagesView.populateMessages();
    $('.tab').removeClass("selected");
    Tabs.appendTab(App.defaultRoom);
    //toggle display of previous chats divs to none
    //append new chats div
  },

  handleTabSelect: function(event){
    console.log(event);

    App.room = event.target.innerText;
    MessagesView.populateMessages();
    $('.tab').removeClass("selected");
    $(event.target).addClass("selected");
  }
  
};
