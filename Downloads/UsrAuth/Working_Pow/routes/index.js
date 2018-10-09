var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Email = require('../models/email');
var mid = require('../middleware')


// // GET /register  PROPER
// router.get('/register', mid.loggedOut, function(req, res, next) {
//   return res.render('register', { title: 'Sign Up' });
// });

// GET /register-temp
router.get('/register', mid.blockAccess, function(req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});

// GET /thankyou
router.get('/thankyou', function(req, res, next) {
  return res.render('thankyou', { title: 'Thank You' });
});

// POST /beta-signup

router.post ('/', function (req, res, next) {
  if (req.body.email) {
    var userEmail = {
      email: req.body.email
    }
    Email.create(userEmail, function (error, user) {
      if (error) {
        return next(error);
      } else {
        console.log('Test');
        // req.session.userId = user._id;
        return res.redirect('/thankyou');
      }
    });
  }
})



// POST /register
router.post('/register', mid.blockAccess, function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.homeMountain &&
    req.body.password &&
    req.body.confirmPassword) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      var userData = {
        email: req.body.email,
        name: req.body.name,
        homeMountain: req.body.homeMountain,
        password: req.body.password
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });

    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})

// GET /login
router.get('/login', mid.blockAccess, function(req, res, next) {
  return res.render('login', { title: 'Login' });
});

// POST /login
router.post('/login', mid.blockAccess, function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

// GET /profile
router.get('/profile', function(req, res, next) {
  if (! req.session.userId ) {
    var err = new Error("You are not allowed to view this page.");
    err.status = 403;
    return next(err);
  }
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        return res.render('profile', { title: 'Profile', name: user.name, homeMountain: user.homeMountain })
      }
    });
});

// GET /logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
