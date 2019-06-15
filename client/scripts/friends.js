var Friends = {
  myFriends: [],
  handleBefriend: function(event){      
      Friends.myFriends.push(event.target.innerText);
      MessagesView.populateMessages();
      Friends.toggleStatus();
  },
  toggleStatus: function(){

  }

};