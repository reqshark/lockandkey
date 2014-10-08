var crypto = require('crypto');

module.exports = {
  lock: function (str,k){
    var c = crypto.createCipher('aes-256-cbc',k);
    var ret = c.update(str,'utf8','base64');
    ret += c.final('base64');
    return ret;
  },
  unlock: function (str,k){
    var d = crypto.createDecipher('aes-256-cbc', k);
    var ret = d.update(str,'base64','utf8');
    ret += d.final('utf8');
    return ret;
  }
}