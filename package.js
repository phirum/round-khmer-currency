Package.describe({
  name: 'phirum:round-khmer-currency',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'round khmer currency (Riel Currency:?)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/phirum/round-khmer-currency.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('roundRielCurrency');
  api.addFiles('round-khmer-currency.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('phirum:round-khmer-currency');
  api.addFiles('round-khmer-currency-tests.js');
});
