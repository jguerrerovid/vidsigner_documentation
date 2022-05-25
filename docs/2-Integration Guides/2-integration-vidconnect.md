---
id: integration-vidconnect
title: Integration of VIDconnect
---

### Register your Entity

In order to interact with VIDconnect you need to register your entity. An entity represents a party that will be registered at VIDconnect. This entity will hold the OpenID client information.

:::info
VIDconnect is an independent service so having an entity in VIDcredentials does not mean having access to VIDconnect.
:::

If you are interested in using VIDconnect, please contact the VIDchain support team [support@vidchain.net](mailto:support@vidchain.net) for your entity creation in VIDconnect.

When registering a new entity you will be required to provide:

- `redirect_uri`: This URL defines the location where the OIDC Provider should redirect the user after the authentication flow is finished. More than one URL can be provided for testing purposes.
- (optional) `logo` : This optional attribute defines the image that will appear when user is logging in (QR website).
- (optional) `scope`: Specify which kind of credentials you want to allow presenting: email, phone, verifiableId... By default any generic Verifiable Credential is valid if you do not specify otherwise.

With this information, Validated ID is ready to create your entity and provide you back the access details:

- `client_id` : The client id is a string to uniquely identify your client when making calls to the OIDC provider.
- `client_secret`: The client secret is used to authenticate the client to OIDC provider.

### Integrate your site to VIDconnect

Once you are provided with your `client_id` and `client_secret` you are ready to start the integration.

The flow basically consists on:

1- Redirecting the user from your website to VIDconnect. The user will interact with VIDconnect either through scanning a QR code or, if the user is navigating in a mobile browser, it will be automatically be redirected to folllow the process with VIDwallet app.
2- The user will select with which DID wants to be authenticated and present any credential requested.
3- VIDconnect will validate the presentation of the ownership of the DID and the verifiable presentation validity. If success, VIDconnect will provide a code to your `redirect_uri`.
4- With this code received via callback, you are ready to request the JWT that contains the information presented by the user, either the did or a verifiable presentation.
5- Use the information within the JWT to validate your business logic rules.

### How to redirect the user to VIDconnect

When you want to authenticate the user either by his/her identifier or through a verifiable presentation, redirect your page to `https://staging.vidchain.net/oauth2/auth`. See more details about [this request](https://docs.vidchain.net/vidconnect-openapi/redirect-the-user-to-vi-dconnect) in VIDconnect OpenAPIs specifications.

## How to get information token from VIDconnect once the user has authenticated

Retrieve the token at `https://staging.vidchain.net/oauth2/token`. See more details about [this request](https://docs.vidchain.net/vidconnect-openapi/get-information-token-from-vi-dconnect-once-the-user-has-authenticated) in VIDconnect OpenAPIs specifications.

### Example setup of an OpenID Connect Client

This section details the example configuration of an OpenID client using Typescript and the [JSO client](https://www.npmjs.com/package/jso):

```javascript
import { JSO, Popup } from "jso";

const nonce = utils.randomString(24);
const state = utils.randomString(24);

let configFile = {
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
  token: config.IDENTITY_PROVIDER + "/oauth2/token",
  authorization: config.IDENTITY_PROVIDER + "/oauth2/auth",
  redirect_uri: config.REDIRECT_CALLBACK,
  scopes: {
    request: ["openid", "offline"],
    require: ["openid", "offline"],
  },
  response_type: "code",
  debug: true,
};

this.client = new JSO(configFile);
```

## Demo example

In order to provide more examples, we have a public repository with demos that show how to interact with VIDconnect.

- [VIDchain demo webapps that show how to integrate with VIDchain APIs](https://github.com/validatedid/VIDchain-demo-v2)
