Template.firstTest.events({
  'submit form': function(e) {
    e.preventDefault();
    var clientId = Session.get('client_id');

    var Test1 = {
      deepL: $(e.target).find('[name=deepL]').val(),
      deepR: $(e.target).find('[name=deepR]').val(),
      hurdleL: $(e.target).find('[name=hurdleL]').val(),
      hurdleR: $(e.target).find('[name=hurdleR]').val(),
      shoulderL: $(e.target).find('[name=shoulderL]').val(),
      shoulderR: $(e.target).find('[name=shoulderR]').val(),
      raiseL: $(e.target).find('[name=raiseL]').val(),
      raiseR: $(e.target).find('[name=raiseR]').val(),
      pushL: $(e.target).find('[name=pushL]').val(),
      pushR: $(e.target).find('[name=pushL]').val(),
      stabilityL: $(e.target).find('[name=stabilityL]').val(),
      stabilityR: $(e.target).find('[name=stabilityR]').val(),
      shuttle1: $(e.target).find('[name=shuttle1]').val(),
      shuttle2: $(e.target).find('[name=shuttle2]').val(),
      shuttle3: $(e.target).find('[name=shuttle3]').val(),
      dash1: $(e.target).find('[name=dash1]').val(),
      dash2: $(e.target).find('[name=dash2]').val(),
      dash3: $(e.target).find('[name=dash3]').val(),
      jump1: $(e.target).find('[name=jump1]').val(),
      jump2: $(e.target).find('[name=jump2]').val(),
      jump3: $(e.target).find('[name=jump3]').val(),
      thomas1: $(e.target).find('[name=thomas1]').val(),
      thomas2: $(e.target).find('[name=thomas2]').val(),
      thomas3: $(e.target).find('[name=thomas3]').val(),
      user_id: clientId
    };

    firstTest._id = firstTest.insert(Test1);

    Meteor.call('newTest1', Test1);
    // Router.go('postPage', post);
  }, 

  'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this Test?")) {
      // var currentTestId = this._id;
      firstTest.remove(this._id);
    }
  }
});


Template.firstTest.helpers({
  Test1: function() {
    return firstTest.findOne({user_id: Session.get('client_id')});
  }
});

