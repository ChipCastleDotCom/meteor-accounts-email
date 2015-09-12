Package.describe({
  name: 'chipcastledotcom:accounts-email',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Extract the email address from an Account object',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChipCastleDotCom/meteor-accounts-email',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('accounts-email.js');
  api.export(['AccountsEmail'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chipcastledotcom:accounts-email');
  api.addFiles('accounts-email-tests.js');
});
