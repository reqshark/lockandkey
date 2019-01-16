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

over protocols and wires, i like to use strings. generate your cypher text and send. unlock it elsewhere if the shared secret is known.

# run the example
```bash
$ git clone https://github.com/reqshark/lockandkey && cd lockandkey
$ node test
```
