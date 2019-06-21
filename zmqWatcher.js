let zmq = require('zeromq')
let sock = zmq.socket('sub')

const init = callback => {
  // Connect to the devnet node's ZMQ port
  sock.connect('tcp://zmq.devnet.iota.org:5556')
  sock.subscribe(
    'DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DAT'
  )

  sock.on('message', msg => {
    const data = msg.toString().split(' ') // Split to get topic & data
    callback(data[1])
  })
}

module.exports = { init }
