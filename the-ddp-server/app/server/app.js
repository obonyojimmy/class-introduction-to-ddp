Meteor.startup(function () {
  // the server object is assigned to Meteor.server
  var server = Meteor.server;
  debugger;
});

Meteor.methods({
  '/hello': function () {
    return 'world';
  }
});

Meteor.publish('welcome', function () {
  this.added('messages', Random.id(), {msg: 'welcome!'});
});
