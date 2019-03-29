const spawn = require('child_process').spawn;
const file = __dirname + '/temp.py'

const temp = async () => {
  const p = new Promise((res, rej) => {
    // Spawn a child and read the data back
    let client = spawn('python', [file], {cwd: '/tmp'});
    client.stdout.on('data', (data) => {
       res(data.toString())
    });

  })
  return p
}

module.exports = temp

