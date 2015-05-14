Template.home.events({
	'submit form': function (event) {
		event.preventDefault();

		var client = {
			firstName: $(event.target).find('[name=firstName]').val(),
			lastName: $(event.target).find('[name=lastName]').val(),
			age: $(event.target).find('[name=age]').val(),
			gender: $(event.target).find('[name=gender]').val()
		};

		client._id = Clients.insert(client);

		event.target.client.value = "";
	},

	'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this Client?")) {
      var currentClientId = this._id;
      Clients.remove(currentClientId);
    }
  }
})


Template.home.helpers({
	clients: function () {
		return Clients.find();
	}
})
