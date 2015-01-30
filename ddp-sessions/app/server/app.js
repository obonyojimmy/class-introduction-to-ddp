Meteor.onConnection(function (connection) {
  var server = Meteor.server;
  var session = server.sessions[Object.keys(server.sessions)[0]];
  debugger;
});
