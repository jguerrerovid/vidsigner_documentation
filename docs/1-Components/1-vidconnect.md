---
id: vidconnect
title: VIDconnect
---

Validated ID has developed its own implementation of the did-auth protocol to authenticate a user and a Relaying Party using DIDs[^1]. The current authentication process follows the DID SIOP[^2] (Self-Issued OpenID Provider) authentication flow, which uses two JSON Web Tokens (JWT) signed by both parties' DID keys during a mutual authentication flow. It also supports the protocol to exchange Verifiable Credentials[^3] (VCs) as part of the identity token response.

Current version supports only ES256k (and ES256K-R) algorithm (the EC secp256k1).



[^1]: ref to did 
[^2]: ref to siop 
[^3]: ref to vc 
