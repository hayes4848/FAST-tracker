Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
   waitOn: function() { return Meteor.subscribe('clients'); }
});

Router.route('/', {name: 'home'});

Router.route('client/:_id', {
	name: 'clientPage',
	data: function() { return Clients.findOne(this.params._id); },
	onBeforeAction: function () {
	Session.set('client_id', this.params._id);
	this.next();
	}
});


var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}


Router.onBeforeAction(requireLogin);

