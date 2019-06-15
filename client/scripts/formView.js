var FormView = {

  $form: $('form'),
  $refresh: $('#chats_refresh'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$refresh.on('click', FormView.handleRefresh);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // var formData =new FormData(docjument.querySelector('form'));
    let newMessage = {'username': App.username, 'roomname': App.room || '', 'text': document.getElementById("message").value};
    Parse.create(newMessage, console.log("New message created."));
    FormView.handleRefresh();
  },
  
  handleRefresh: function(){
    console.log("Refreshing...");
    App.refresh();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
  

};