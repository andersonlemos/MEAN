/**
 * Created by anderson on 23/05/15.
 */
var passport= require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports =  function(){

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID:'988d5a027d8d3b00b6c9',
        clientSecret:'0e4e91636fea7e5a689fedc87709db34086c022e',
        callbackURL:''
    },function(accessToken,refreshToken,profile,done){
        Usuario.findOrCreate(
            {"login":profile.username},
            {"nome":profile.username},
            function(erro,usuario){
                if(erro) {
                    console.log(erro);
                    return done(erro);
                }
            return done(null,usuario);
            }
        );
    }));

    passport.serializeUser(function(usuario,done){
        done(null,usuario._id);
    });
    passport.deserializeUser(function(id,done){
        Usuario.findById(id).exec()
            .then(function(usuario){
                done(null,usuario);
            });
    });
};