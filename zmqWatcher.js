let zmq = require('zeromq')
let sock = zmq.socket('sub')

// Connect to the devnet node's ZMQ port
sock.connect('tcp://zmq.devnet.iota.org:5556')
sock.subscribe(
  'PAY9ADDRESS9PAY9ADDRESS9PAY9ADDRESS9PAY9ADDRESS9PAY9ADDRESS9PAY9ADDRESS9PAY9ADDRE'
)

sock.on('message', msg => {
  const data = msg.toString().split(' ') // Split to get topic & data
  console.log(data[1])
})
