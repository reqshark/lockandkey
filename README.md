# lock and key
lock and unlock stuff using a key

```bash
$ npm install lockandkey
```

find a cryptographic key and use it on some strings.

```js
var key = '6466d1a33b8c33d5a644c5e5967f1f4551b503c0d9c55f1dd3236e4ff6de980';
var lak = require('lockandkey');
var lock = lak.lock;
var unlock = lak.unlock;

var locked = lock('done deal', key); //ciphered base64 string, locked up!
var unlocked = unlock(locked, key); //'done deal'
```

if you need help finding a cryptographic key, check the test directory and run a diffie helman exchange.

node buffers work well over the protocols. generate the keys and dont touch: just maintain node buffers end-to-end they'll arrive intact for computing the secret key.

# run the example
```bash
$ git clone https://github.com/reqshark/lockandkey && cd lockandkey; npm i
$ node test
```
