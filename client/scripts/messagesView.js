var MessagesView = {
  messages: {},
  $chats: $('.chats'),
  $userNames: "",


  initialize: function() {
    
    Tabs.appendTab(App.room);
    MessagesView.populateMessages();
    
  },
  
  populateMessages: function(){
    MessagesView.$chats.empty();
    // let obj
    // var isANewRoom = function(roomname){
    //   for(var i = 0; i < App.rooms.length; i++){
    //     if(App.rooms[i].roomname === roomname){
    //       return false;
    //     }
    //   }
    //   return true;
    // }
    for(let message of this.messages){
      if(App.room === 'Main'){
        MessagesView.renderMessage(message);
      }else if(message.roomname === App.room){
        MessagesView.renderMessage(message);
      }
      //@todo: move this
      if(!App.rooms.includes(message.roomname)){
        App.rooms.push(message.roomname);
        App.rooms.sort();
      }
      // if(!isANewRoom(message.roomname)){
        
      // }
    }
    MessagesView.$userNames = $('.username');
    MessagesView.$userNames.on('click', (event)=>{Friends.handleBefriend(event)});
  },

  // refreshMessages: function(){
  //   MessagesView.populateMessages();
  // },
  renderMessage: function(messageObject) {
    let messageHTML;
    if(Friends.myFriends.includes(messageObject.username)){
      
      messageHTML = MessageView.renderFriend(
        {username: messageObject.username, 
          text: messageObject.text});
    } else {
      messageHTML = MessageView.render(
        {username: messageObject.username, 
          text: messageObject.text});
    }
    
    MessagesView.$chats.append(messageHTML);
  }

};