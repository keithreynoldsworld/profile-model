$(document).ready(function(){   

	var user = new UserModel();
	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'home':'profile',
			'edit': 'edit'
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
		}
	});

	var app = new App();
	Backbone.history.start();	

	var user = new UserModel();

	user.on('change', update);


	function update(UserModel){
		$('.profile-usertitle-name').html(UserModel.get('name'));
		$('.profile-usertitle-job').html(UserModel.get('email'));
		$('.dropdown-toggle').html(UserModel.get('name'));
	}

	function fillUser(e){
		e.preventDefault();
		user.set({
			name: $('#name').val(),
			role: $('#role').val(),
			email: $('#inputEmail3').val(),
		});
		
	}

	$('form').on('submit', fillUser);

});