[![Build
Status](https://travis-ci.org/ChipCastleDotCom/meteor-accounts-email.svg)](https://travis-ci.org/ChipCastleDotCom/meteor-accounts-email)

## Introduction

A [Meteor package](https://atmospherejs.com/chipcastledotcom/accounts-email) for extracting an email address from an `Accounts` object.


## Installation

    meteor add chipcastledotcom:accounts-email


## Password service support

Here's an example object using the **password** service, such as one
that would be created when using the `accounts-password` package:

    var passwordAccount = {
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

The email address could be determined by using this package as follows:

    var email = AccountsEmail.extract(passwordAccount);

The `email` variable above in this case would be set to
`support@chipcastle.com`.


## Oauth service support

Here's an example object using the **github** service, such as one
that would be created when using the `accounts-gitub` package:

    var githubAccount = {
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

The email address could be determined by using this package as follows:

    var email = AccountsEmail.extract(githubAccount);

The `email` variable above in this case would be set to
`github@example.com`.


The following OAuth service libraries are supported:

  * `accounts-facebook`
  * `accounts-google`
  * `accounts-twitter`
  * `accounts-github`


## SPECIAL THANKS TO

[The Meteor Chef](http://themeteorchef.com/recipes/roll-your-own-authentication/) for the code inspiration.


## Donating

[![Support via
Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/chip/)


## License

Software provided under the [MIT License](https://github.com/chip/meteor-countries/blob/master/LICENSE).


## Endorse my work on Coderwall

[![endorse](https://api.coderwall.com/chip/endorsecount.png)](https://coderwall.com/chip)


## Contributing

Please fork this repo and write tests.


## Testing

From within this repository's directory:

    meteor test-packages ./
