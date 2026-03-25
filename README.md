# RECOVERING MY NPM PUBLISH RIGHTS

npm/github support said to me:
> "There isn't enough information provided to us to verify you identity, are unable to recover access to the npm user account."

Ok I'm happy to provide more information to verify my identity for my reqshark account.

Once I regain access to my account, I will update the npm package called `lockandkey` first among others.

# Links to this project
Here's the npm link: https://www.npmjs.com/package/lockandkey

GitHub repo is https://github.com/reqshark/lockandkey

# To Establish The Identity of Bent Cardan
I have control of my github account (reqshark) and I will establish my identity to npm/github support with a simple commit to the above github repository.

* I, Bent Cardan, do not have control of my NPM user account (reqshark).
* I am emailing with Github/NPM support today using my current email (bcardan@gmail.com) Wednesday, March 25, 2026 to recover my NPM publish account rights.
* I must establish my identity as reqshark (Bent Cardan).
* I use the account reqshark on github, but I am currently locked out of my NPM pkg account and need help from support to recover this account, so I can update this package and others.

Thank you for your time 

# lock and key
lock and unlock stuff using a key

```bash
$ npm install lockandkey
```

find a cryptographic key and use it on some strings.

```js
const key = '6466d1a33b8c33d5a644c5e5967f1f4551b503c0d9c55f1dd3236e4ff6de980'
const { lock, unlock } = require('lockandkey')

var locked = lock('done deal', key); //ciphered hex string, locked up!
var unlocked = unlock(locked, key); //'done deal'
```

if you need help finding a cryptographic key, check the test directory and run a diffie helman exchange.

over protocols and wires, i like to use strings. generate your cypher text and send. unlock it elsewhere if the shared secret is known.

# run the example
```bash
$ git clone https://github.com/reqshark/lockandkey && cd lockandkey
$ node test
```
