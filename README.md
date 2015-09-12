# INTRODUCTION

Extract an email address from an Accounts object, which is an object
created either from `accounts-password` or other OAuth libraries such as
the following:

  * `accounts-facebook` 
  * `accounts-google` 
  * `accounts-github` 
  * `accounts-twitter` 


# INSTALLATION

`meteor add chipcastledotcom:accounts-email`


# USAGE

    var email = AccountsEmail.extract(account);


# SPECIAL THANKS TO 

[The Meteor Chef](http://themeteorchef.com/recipes/roll-your-own-authentication/) for the code inspiration.


## Donating

[![Support via
Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/chip/)


## License

Software provided under the [MIT
License](https://github.com/chip/meteor-countries/blob/master/LICENSE).


## Endorse my work on Coderwall

[![endorse](https://api.coderwall.com/chip/endorsecount.png)](https://coderwall.com/chip)


## Contributing

Please fork this repo and write tests.


## Testing

From within this repository's directory:

    meteor test-packages ./
