const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //we previously set this up in models/User.js

passport.serializeUser((user, done) => {
	done(null, user.id); //this is the mongo db id and not the google id
})

passport.deserializeUser((id, done) => {
	User.findById(id)
			.then(user => {
				done(null, user);
			})
})

//console.developers.google.com
passport.use(new GoogleStrategy({
		clientID : keys.googleClientID,
		clientSecret : keys.googleClientSecret,
		callbackURL : '/auth/google/callback' //this is a little different than the video
	}, (accessToken, refreshToken, profile, done) => {
				User.findOne({ googleId: profile.id })
						.then((existingUser) => {
							if(existingUser) {
								done(null, existingUser); //first argument null (no error) and 2nd passing back the existing user
							} else {
									new User({ googleId: profile.id })
										.save() //sets the googleId in our user Schema to the profile.id (actual Google id), save method must be called to persist it to the db
										.then(user => done(null, user));
							}
						})

	})
);
