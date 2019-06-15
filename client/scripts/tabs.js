var Tabs = {
  renderTab: _.template(`
      <div class="tab">
        <%- roomname %>
      </div>
    `),

  appendTab: function(roomname){
    //make a tab
    $tab = Tabs.renderTab({roomname: roomname});
    //attach to tabs div
    $('.tabs').append($($tab).addClass("selected").on("click", (event)=> {RoomsView.handleTabSelect(event)}));
    console.log()
  }
}