firstTest = new Mongo.Collection('firstTest');

firstTest.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Meteor.methods({
  newTest1: function (newTest) {
    something = firstTest.insert(newTest);
     return {
      _id: something
    };
  }
})

