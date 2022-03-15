---
id: sioplib
title: DID SIOP Auth Library
---

Validated ID has developed his own implementation of did-auth protocol to authenticate a user and a Relaying Party using DIDs. The current DID Auth implementation follows DID SIOP Auth, which uses two JSON Web Tokens (JWT) signed by both two parties DID keys in a double challenge-response authentication. It is also supported the protocol to exchange Verifiable Credentials as part of the ID token response.

Current version supports only ES256k (and ES256K-R) algorithm (the EC secp256k1).

Please see more details and how to use it at [our npm repository](https://www.npmjs.com/package/@validatedid/did-auth).
