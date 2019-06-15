var Rooms = {
    add: function(){
      console.log("Rooms.add")
    },
    
    renderChatsDiv: _.template(`
      <div class="chats">
        <%- roomname %>
      </div>
    `)

};