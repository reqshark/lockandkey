var crypto = require('crypto');
var alice = crypto.getDiffieHellman('modp5');
var bob = crypto.getDiffieHellman('modp5');
var alice_keys = alice.generateKeys();
var bob_keys = bob.generateKeys();
var bob_secret = bob.computeSecret(alice_keys, null, 'hex');
var alice_secret = alice.computeSecret(bob_keys, null, 'hex');

if(alice_secret == bob_secret)
  var dhKey = bob_secret || alice_secret;

module.exports = dhKey;