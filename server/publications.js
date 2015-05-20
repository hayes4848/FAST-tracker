Meteor.publish('clients', function() {
  return Clients.find();
});

Meteor.publish('makeitwork', function() {
  return firstTest.find();
});

