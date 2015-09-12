(function () {
  'use strict';

  Tinytest.add('Expect null for an empty Accounts object', function (test) {
    test.equal(AccountsEmail.extract({}), null);
  });

  Tinytest.add('Expect null for no Accounts object', function (test) {
    test.equal(AccountsEmail.extract(), null);
  });

  var accountEmail = {
        "_id" : "RpX3aJAKkvwaTegWY",
        "createdAt" : "2015-01-04T03:58:34.740Z",
        "emails" : [
                {
                        "address" : "support@chipcastle.com",
                        "verified" : false
                }
        ],
        "profile" : {
                "name" : "CCDC Support",
                "admin" : true
        },
        "services" : {
                "password" : {
                        "bcrypt" : "$2a$10$1UgOmM7LCYgjLCfG4yQi0.Brm9Agl2AJYrEUJ3UaRZgHtTC1xLcia"
                },
                "resume" : {
                        "loginTokens" : [ ]
                }
        }
  };

  Tinytest.add('Expect support@chipcastle.com for Accounts object with emails.address present', function (test) {
    test.equal(AccountsEmail.extract(accountEmail), 'support@chipcastle.com');
  });

  var accountGithub = {
    "_id" : "Wasb5Nij7EjdS6ndC",
    "createdAt" : "2015-09-11T22:19:15.241Z",
    "services" : {
      "github" : {
        "id" : 31725,
        "accessToken" : "7b949b4ab94956c7c289b419a22b2b302b99bcbe",
        "email" : "github@example.com",
        "username" : "chip"
      },
      "resume" : {
        "loginTokens" : [
          {
            "when" : "2015-09-11T22:19:17.823Z",
            "hashedToken" : "6OMXf5tL2dnTJx5CVItXMcoWzRZ8qr24jgDlTJwib+w="
          }
        ]
      }
    }
  };

  Tinytest.add('Expect github@example.com for Accounts object with Github service', function (test) {
    test.equal(AccountsEmail.extract(accountGithub), 'github@example.com');
  });

  var accountGoogle = {
    "_id" : "HupERWZfedwF7S9RH",
    "createdAt" : "2015-03-05T17:41:02.416Z",
    "services" : {
      "google" : {
        "accessToken" : "ya29.LQFbD_-_sweb3X22Udeabmh5tVhdoHO8VZFwHG4uJH8eBDudloBJ0WKwaJ2ceHWO4nf2SOTbF aMGaQ",
        "idToken" :
"eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4MWRkZjg1OTUxZjdlYzVjMTczNjcwMzNlNTM5ZDE3Njk3NmQ5MW QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwic3ViIjoiMTEyOTk1MDI1MjM1MjcxMjAzMDQzIiwiYXpwIjoiNDcwNjI2OTExODI4LXI4Y3M2Mm tvZDBmbjJzbDl0cGI5ZHM5bDEzaWNicHNsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiZW1haWwiOiJkYW5nYXN0b25AZ21haWwuY29tIiwiYXRfa GFzaCI6ImR4OUtLZ2REVjdPUnlkeWxyVWN6Z1EiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXVkIjoiNDcwNjI2OTExODI4LXI4Y3M2MmtvZDBmbjJzbDl0 cGI5ZHM5bDEzaWNicHNsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaWF0IjoxNDI1NTc3MDgxLCJleHAiOjE0MjU1ODA4NjF9.XQvqpZHReS1ylM Kp-PLiExS-gZ5f-WAe7ERhCgMVcHP5Ucx0UCJbF_fnTCBpxfNBujoB-tND8MVymI4N-uDxDwGGP0yImbzkCnn36Ic_2FNeNs349QHdQjyyLSvf59ciBm3Su d__Xkuyh-FdK6rl8SkPEO37qU3VXIuVBAXtsjc",
        "expiresAt" : 1425580861869,
        "id" : "112995025235271203043",
        "email" : "google@example.com",
        "verified_email" : true,
        "name" : "Google Example",
        "given_name" : "Google",
        "family_name" : "Example",
        "picture" : "https://lh5.googleusercontent.com/-qAdiIBE_kac/AAAAAAAAAA~/AAAAAAAAGxk/wAKfhzi9rEQ /photo.jpg",
        "locale" : "en"
      },
      "resume" : {
        "loginTokens" : [ ]
      }
    },
    "profile" : {
      "name" : "Google Example"
    }
  };

  Tinytest.add('Expect google@example.com for Accounts object with Google service', function (test) {
    test.equal(AccountsEmail.extract(accountGoogle), 'google@example.com');
  });


  var accountFacebook = {
    "_id" : "HRbGZMtun8qW6nZ8x",
    "createdAt" : "2015-03-03T02:30:13.236Z",
    "services" : {
      "facebook" : {
        "accessToken" : "CAAVjZCnCULMgBAAKCiUYz35JRIiZBWMa4sP0uZAHljJoUZBYco7QvMnlVrli3z3hJTXXK0dFG20ai W3QCeibizYIPX6WJE2aqgXJgmTEcpZAMSUJL538o1jVEZCV4CrSKrptpy11zUz5WY66fGE2j3DkUEA1HrJyrUobGRMZCZBczDZBbEgKBJDBUxGMGnZBN6ih rqPRZAT1T9lTj4poGLoaCEc",
        "expiresAt" : 1430588827455,
        "id" : "10152578191801915",
        "email" : "facebook@example.com",
        "name" : "Chip Castle",
        "first_name" : "Chip",
        "last_name" : "Castle",
        "link" : "https://www.facebook.com/app_scoped_user_id/10152578191801915/",
        "gender" : "male",
        "locale" : "en_US"
      },
      "resume" : {
        "loginTokens" : [ ]
      }
    },
    "profile" : {
      "name" : "Chip Castle"
    }
  };

  Tinytest.add('Expect facebook@example.com for Accounts object with Facebook service', function (test) {
    test.equal(AccountsEmail.extract(accountFacebook), 'facebook@example.com');
  });

  var accountTwitter  = {
    "profile": {},
    "services": {
      "twitter": {
        "id": 7829990,
        "accessToken": "a49d3c9aedb73b739bc8042c5fe9ce26b49e5a7e",
      }
    }
  };

  Tinytest.add('Expect undefined for Accounts object with Twitter service', function (test) {
    test.isUndefined(AccountsEmail.extract(accountTwitter));
  });

})();
