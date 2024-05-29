const crypto = require('crypto').webcrypto;

async function verifySignatureECDSA(publicKeyHex, signatureHex, data) {
  const publicKeyBuffer = new Uint8Array(Buffer.from(publicKeyHex, 'hex'));
  const signatureBuffer = new Uint8Array(Buffer.from(signatureHex, 'hex'));
  const dataBuffer = new TextEncoder().encode(data);

  try {
    const publicKey = await crypto.subtle.importKey(
      "spki",
      publicKeyBuffer,
      {
        name: "ECDSA",
        namedCurve: "P-256",
      },
      true,
      ["verify"]
    );

    const isVerified = await crypto.subtle.verify(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" },
      },
      publicKey,
      signatureBuffer,
      dataBuffer
    );

    return isVerified;
  } catch (err) {
    console.error('ECDSA verification failed:', err.message);
    return false;
  }
}

module.exports = verifySignatureECDSA;
