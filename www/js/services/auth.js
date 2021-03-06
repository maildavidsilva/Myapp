'use strict'; 
app.factory ('Auth', function(FURL, $firebaseAuth, $state) {
	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {

		user: {},

		login: function(user){
			console.log("we got to login funtion");
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});
		},

		register: function(user){
			console.log('in the register');
			return auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function(){
				console.log('user is saving');
				return Auth.login(user);
			})
		},

		logout: function(){
			auth.$unauth();
		} 

	}
	auth.$onAuth(function(authData){
		if(auth){
			Auth.user = authData;
			console.log('the user has already logged in'); 
			$state.go('tab.dash');
		}else {
			$state.go('login');
		}
	})
	return Auth;
});