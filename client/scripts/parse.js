var Parse = {

  //server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
  server: `http://127.0.0.1:3000/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      // data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readRoom: function(successCB, errorCB = null) {
    // console.log(JSON.stringify({'roomname': App.room}));
    $.ajax({
      url: Parse.server+`?where=${JSON.stringify({'roomname': App.room})}`,
      type: 'GET',
      // data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch room', error);
      },
      // where: /*JSON.stringify(*/{'roomname': App.room}/*)*/
    });
  },

  deleteMessage: function(objectID, successCB, errorCB = null) {
    console.log('Bye');
    $.ajax({
      url: Parse.server+objectID,
      origin: '*',
      type: 'DELETE',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to delete messages', error);
      },
    });
  }
};