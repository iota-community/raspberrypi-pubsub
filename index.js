const temp = require('./fetchTemp.js')
const { init } = require('./zmqWatcher.js')

/// IOTA Setup
const IOTA = require('@iota/core')
const Converter = require('@iota/converter')
const iota = IOTA.composeAPI({ provider: 'https://nodes.devnet.iota.org:443' })
const iotaSeed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
const dataLocation =
  'DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DAT'

/// Send IOTA Transaction
const sendTx = data => {
  const message = Converter.asciiToTrytes(JSON.stringify({ temperature: data }))
  const transactions = [
    {
      value: 0,
      address: dataLocation, // Where the data is being sent
      message: message // The message converted into trytes
    }
  ]

  iota
    .prepareTransfers(iotaSeed, transactions)
    .then(trytes => iota.sendTrytes(trytes, 3, 9))
    .then(bundle => {
      console.log('Transfer successfully sent')
      bundle.map(tx => console.log(tx))
    })
    .catch(err => {
      console.log(err)
    })
}

const sendTemp = async () => {
  //   Capture Data
  const data = await temp()
  // Send the data
  console.log('Current temp: ' + data)
  const message = Converter.asciiToTrytes(JSON.stringify({ temperature: data }))
  const transactions = [
    {
      value: 0,
      address: dataLocation, // Where the data is being sent
      message: message // The message converted into trytes
    }
  ]
  sendTx(transactions)
}

const sendAddress = () => {
  console.log('New message found!')
}

init(sendAddress)
setTimeout(() => sendTemp(), 20000)
