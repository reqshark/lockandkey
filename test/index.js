var key = require('./diffie');

var lockandkey = require('../');
var lock = lockandkey.lock;
var unlock = lockandkey.unlock;

var locked = lock('its a done deal, the cops didnt catch us.', key);
var unlocked = unlock(locked, key);

console.log(locked); //unreadable base64 giberishly encrypted
console.log(unlocked); //a message yo, its a done deal the cops didnt catch us.
