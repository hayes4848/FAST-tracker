Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
   waitOn: function() { return Meteor.subscribe('clients'); }
});

Router.route('/', {name: 'home'});

Router.route('client/:_id', {
	name: 'clientPage',
	data: function() { return Clients.findOne(this.params._id); }
});
