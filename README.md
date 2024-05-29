# NFID Signature Verification in Node.js

This repository contains an implementation for verifying NFID signatures on the backend using Node.js. The project uses Express.js for setting up a simple server to handle verification requests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [POST /verify](#post-verify)
- [Testing](#testing)
- [Example Request](#example-request)
- [License](#license)

## Prerequisites

- Node.js v14 or higher
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/nfid-verification-nodejs.git
   cd nfid-verification-nodejs
2. Install dependencies:
   ```sh
   npm install

## Usage

1. Start the server:
   ```sh
    node server.js

2. The server will start on port 3000 by default.

## API
**POST /verify**

Verifies the provided NFID ECDSA signature.
Request

    URL: /verify
    Method: POST
    Headers: Content-Type: application/json
    Body:

   ```
    {
      "publicKey": "your-public-key-hex",
      "signature": "your-signature-hex",
      "data": "your-data"
    }
   ```

**Response**
    200 OK

   ```
   {
     "isValid": true
   }
   ```

or

   ```
    {
      "isValid": false
    }
   ```

## Testing

Use Postman or curl to test the API endpoint.
Example Request

```
curl -X POST http://localhost:3000/verify \
     -H "Content-Type: application/json" \
     -d '{
           "publicKey": "3059301306072a8648ce3d020106092a8648ce3d030107034200020f48e4ced6e0c40ea3a5bc3376d4e55bc8f42223baf811ee211aeadd37add03d128a7db5d3b1a28db359c3e847a0f7791d08dccca36732a4aecb6cb8624995ce",
           "signature": "9e6a107f9f58fab1a4893g3a6308839e7b552513bafbaa2398b67d230de3f8cdfb1d16v126f15b8f4d077ef25f5f1ca7d7dea6db9bcc0a2083278b04c5f23dfb",
           "data": "447nt-2gt2a-f4kbw-foc2d-jahug-q2y56-2hxtv-esn3o-v7yzx-bxgvn-7ae"
         }'
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.
