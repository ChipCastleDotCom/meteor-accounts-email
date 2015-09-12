var isEmpty = function(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

AccountsEmail = {
  extract: function(obj) {
    var account = obj || {};
    if (isEmpty(account)) {
      return null;
    }
    if (account.emails) {
      return account.emails[0].address;
    } else if (account.services) {
      var services = account.services;
      if (services.github) {
        return services.github.email;
      } else if (services.google) {
        return services.google.email;
      } else if (services.facebook) {
        return services.facebook.email;
      } else if (services.twitter) {
        return undefined;
      }
    }
  }
};
