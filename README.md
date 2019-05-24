# IOTA Raspberry Pi Demo

Simple demo for taking environmental data and publishing it to the Tangle.

This application allows you to set up your own IOTA network by using a single [Docker](https://www.docker.com/why-docker) command. When you run this command, you'll have your own IOTA test network and [2.7Pi](https://docs.iota.org/docs/iota-basics/0.1/references/units-of-iota-tokens) (the maximum amount) of test IOTA tokens to use. These tokens will be stored on the first address of this seed: `SEED99999999999999999999999999999999999999999999999999999999999999999999999999999`.

![IOTA wallet for the test network](light-wallet-test-tangle.png)

You can use this network to test your ideas and applications without risking any monetary value.

The test network consists of one [IRI node](https://docs.iota.works/docs/iri/0.1/introduction/overview) and an instance of a [Compass](https://docs.iota.works/docs/compass/0.1/introduction/overview). The IRI node receives transactions, validates them, and keeps an up-to-date record of users' balances. At regular intervals, Compass sends the IRI node zero-value transactions called [milestones](https://docs.iota.org/docs/the-tangle/0.1/concepts/the-coordinator#milestones) that reference other transactions. Any transaction that's referenced by a milestone is considered confirmed. At this point, the node updates any balances that were affected by the confirmed transaction.

Compass uses a pre-built [Merkle tree](https://docs.iota.works/docs/the-tangle/0.1/concepts/the-coordinator#milestones) (in the `layers` directory) with a depth of 20. This Merkle tree is large enough for Compass to send milestones for over a year at 30-second intervals. 

**Warning:** The purpose of this application is to allow you to quickly set up a test IOTA network. To do so, this application uses a pre-calculated Merkle tree. As a result, you should use this application only for testing. Do not expose this network to the Internet!

## Prerequisites

To use this demo, you need the following:

* [An Enviro Phat sensor board](https://shop.pimoroni.com/products/enviro-phat) connected to a Raspberry Pi

* [An LTS version or the latest version of Node.js and NPM](https://nodejs.org/en/download/)

* [Git](https://git-scm.com/download/linux)

For help setting up a Raspberry Pi, you can follow [these instructions](https://medium.com/@lambtho/raspberry-setup-dcb23e8ba88).

For help setting up the Enviro Phat, you can follow the [Soldering guide](https://learn.pimoroni.com/tutorial/sandyj/soldering-phats) and the [Getting started guide](https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-enviro-phat).

## Run the application

1. Clone this repository
  ```
  git clone https://github.com/iota-community/raspberrypi-pubsub
  ```
2. Change into the `raspberrypi-pubsub` directory
  ```bash
  cd raspberrypi-pubsub
  ```
3. Install the dependencies
  ```bash
  npm install
  ```
4. Run the code
  ```bash
  node index.js
  ```

In the console, you should see that the current temperature in Celcius is sent as a transaction to a node.

![Compass and IRI node logs](cli.gif)
 
**Note:** To check your transaction, you can copy the value of the `hash` field and paste it into the search bar of the Devnet explorer.
 
### Response

```json
Starting app
Current temp: 35.4805409354
Sending transaction
Transfer successfully sent
{ hash:
   'GTJICLAKCQOANGP9WZRCYIQQIJTQCMPLTAKEFWPXOSOUWALGNBBDYOWTWQSM9MRLEIMVHGMLDALYLH999',
  signatureMessageFragment:
   'ODGAHDTCADDDTCFDPCHDIDFDTCGADBJCODGAJDPC9DIDTCGADBUAQAGAPCSCSCFDTCGDGDGADBGANBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCKBCBKBNBNBACOBBCBCCBNBKBCCGAQAGAADTCGDGDPCVCTCGADBGAYBNBQBKBRBNBCCMBKBNBNBNBCCMBPBNBZBMBRBNBSBNBPBNBCCMBQBKBNBLBQBKBGCKBICKBBCKBHCKBLBLBDCKBICKBHCKBDCKBMBLBGCKBICKBHCKBQBKB9CNBGAQDLCQD999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
  address:
   'DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DATA9ADDRESS9DAT',
  value: 0,
  obsoleteTag: 'MPA999999999999999999999999',
  timestamp: 1558702721,
  currentIndex: 0,
  lastIndex: 0,
  bundle:
   'LTIKJHINULXQ9FZ9UE9LZUZYUJTA9PGAZGHUFNKVHVFJVXFAN9HJBXLDJSVYALUVPCT9BJWYJETIYIOHB',
  trunkTransaction:
   'BIAVEQYFHWWQK9VUM9VSIJFZCKIPNRYXUUBLCHLJGVGTAGJEZWGCIIYXMQYXKWFCBAMAWPKAJTUGFJ999',
  branchTransaction:
   'BIAVEQYFHWWQK9VUM9VSIJFZCKIPNRYXUUBLCHLJGVGTAGJEZWGCIIYXMQYXKWFCBAMAWPKAJTUGFJ999',
  tag: 'MPA999999999999999999999999',
  attachmentTimestamp: 1558702724384,
  attachmentTimestampLowerBound: 0,
  attachmentTimestampUpperBound: 3812798742493,
  nonce: 'IDXRJXHLAVHPUJY9ZBWAFFJH9TR'}
```
