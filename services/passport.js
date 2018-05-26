const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //we previously set this up in models/User.js

//console.developers.google.com
passport.use(new GoogleStrategy({
		clientID : keys.googleClientID,
		clientSecret : keys.googleClientSecret,
		callbackURL : '/auth/google/callback' //this is a little different than the video
	}, (accessToken, refreshToken, profile, done) => {
				new User({ googleId: profile.id }).save() //sets the googleId in our user Schema to the profile.id (actual Google id), save method must be called to persist it to the db
	})
);
