const AWS = require('aws-sdk');
const axios = require('axios');

console.log('running...');

for(let i=0; i<1000; i++) {
  go();
}

async function go() {
  while(true) {
    for(let x=0; x<100; x++) {
      Math.sqrt(x);
    }
    await Promise.all([
      axios.get('http://10.34.59.6:3000/').catch(() => {}), // this just returns 100k of random text
      new AWS.DynamoDB().listTables({}).promise().catch(err => console.log(err)),
    ]);
  }
}
