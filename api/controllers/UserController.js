/**
 * UserController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
module.exports = {
    login: function(req, res){
	res.view();
    },
    process: function(req, res){
	passport.authenticate('local', function (err, user, info){
	    if ((err) || (!user)){
		return res.send({
		    message: 'Fallo el login'
		});
		res.send(err);
	    }
	    req.logIn(user, function(err) {
		if (err) res.send(err);
		return res.send({
		    message: 'login exitoso'
		});
	    });
	})(req, res);
    },
    logout: function (req,res){
	req.logout();
	res.send('Has cerrado sesion');
    }
};

module.exports.blueprints = {
 
  // Expose a route for every method,
  // e.g.
  // `/auth/foo` =&gt; `foo: function (req, res) {}`
  actions: true,
 
  // Expose a RESTful API, e.g.
  // `post /auth` =&gt; `create: function (req, res) {}`
  rest: true,
 
  // Expose simple CRUD shortcuts, e.g.
  // `/auth/create` =&gt; `create: function (req, res) {}`
  // (useful for prototyping)
  shortcuts: true
 
};
