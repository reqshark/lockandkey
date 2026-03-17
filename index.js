const {
  createCipheriv,
  createDecipheriv
} = require('crypto')

module.exports = {
  lock: ( str, k ) => {
    if (k.length !== 32)
      throw new Error('key must be 32 bytes long\nlike:\nkey = randomBytes(32).toString('hex')')
    const c = createCipheriv('aes-256-cbc', k, new Uint8Array(16))
    return (c.update(str, 'utf8', 'hex') + c.final('hex'))
  },
  unlock: ( str, k ) => {
    if (k.length !== 32)
      throw new Error('key must be 32 bytes long\nlike:\nkey = randomBytes(32).toString('hex')')
    const d = createDecipheriv('aes-256-cbc', k, new Uint8Array(16))
    return (d.update(str,'hex', 'utf8') + d.final('utf8'))
  }
}
