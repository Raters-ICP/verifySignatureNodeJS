const express = require('express');
const bodyParser = require('body-parser');
const verifySignatureECDSA = require('./verifySignature');

const app = express();
app.use(bodyParser.json());

app.post('/verify', async (req, res) => {
  const { publicKey, signature, data } = req.body;
  const isValid = await verifySignatureECDSA(publicKey, signature, data);
  res.json({ isValid });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
