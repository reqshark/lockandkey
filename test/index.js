// var key = require('./diffie');

var key = '2cb1866097f2b6802b2ebef8ece2e088879a1494a9884b31893e7d87c81f0d08'

var lockandkey = require('../');
var lock = lockandkey.lock;
var unlock = lockandkey.unlock;

var locked = lock('its a done deal, the cops didnt catch us.', Buffer.from(key, 'hex'));
var unlocked = unlock(locked, Buffer.from(key, 'hex'));

console.log(locked); //unreadable base64 giberishly encrypted
console.log(unlocked); //a message yo, its a done deal the cops didnt catch us.
