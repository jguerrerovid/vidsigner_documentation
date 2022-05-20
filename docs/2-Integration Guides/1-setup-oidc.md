---
id: setup-oidc
title: Setup OpenID Connect Client
---

This documentation details the steps to setup an OpenID connect client that is used in an authentication flow. Importantly, the preliminary steps are described beforehand. These preliminary steps are required to be completed to be able to finish the OpenID connect client setup. Finally, this documentation also details some postliminary steps such as changing entity attributes.

## Preliminary Steps

In order to be able to setup the OpenID client, and identifier, a so-called decentralized identifier (DID), has to be created for the client as well as the client ID has to be registered at VIDchain. Last but not least, an API key is required to be able to access the API. Following, we detail the three preliminary steps in detail.

### Register the Entity at VIDchain

:::tip
The VIDchain team supports the clients creating and registering an entity. Please contact [support@vidchain.net](mailto:support@vidchain.net) for support.
:::

:::note
The entity registration at VIDchain requires three paramenters such as the DID, OpenID connect client ID and the API key.
:::

- **Creating an Entity at VIDchain:** An entity represents a party that will be registered at VIDchain. The entity creation process is performed by the VIDchain team for the customers and users of VIDchain. Please contact the VIDchain support team [support@vidchain.net](mailto:support@vidchain.net) for your entity creation.
- **OpenID Connect Client ID:** The client ID is a domain unique identifier for a specific client. This client ID has to be registered at VIDchain so that OpenID connect protocol can be performed.
- **Retrieving the API Key** After the entity was created at VIDchain - by the VIDchain team - the API key is sent to the VIDchain client. This API key is required to be able to interact with the APIs provided by VIDchain.
- **Creating a DID:** The communication with VIDchain requires the information what DID method is used. [Read more about DIDs and DID methods here.](https://www.w3.org/TR/did-core/)

:::info
VIChain supports currently the following DID methods such as Ethereum `did:ethr`, EBSI `did:ebsi`, Alastria `did:ala`, and the ledger-less `did:key` method.
:::

### Authentication to the API

In order to authenticate towards the API, VIDchain uses the _Bearer Token based Http authentication scheme_. The bearer token is required to use the API provided by VIDchain. All requests to the API must contain the bearer token. Note that the token is only valid for 15 minutes and has to be refreshed, if needed, within this time. Section [Obtain a Bearer Token](#obtain-a-bearer-token) describes the steps on how to get the access token.

:::info
VIDchain uses the _Bearer Token based Http authentication scheme_ for the client authentication towards the API.
:::

:::note
The bearer token is only valid for 15 minutes and should be refreshed during this time for permanent usage.
:::

Before receiving the access token, an assertion has to be created. This assertion contains attributes and will be part of requesting the token. The assertion creation is detailed in the section [Create an Assertion](#create-an-assertion).

#### Create an Assertion

To get the access token, first create an `assertion` JWT token and encode it in `base64`.

:::info
The assertion is required to request the access token. It has to be placed in the obtain bearer token request, see [Obtain Bearer Token](#obtain-bearer-token).  
:::

The assertion payload contains the following fields:

- `iss`: The issuer field must contain the OpenID connect client ID to identify the entity on the VIDchain API.
- `nonce`: The nonce field should contain a randomly generated number only used once (nonce).
- `apiKey`: The API key provided by the VIDchain team during the registration has to be included in this field.
- `callbackUrl`: (optional) This callback URL describes the redirect location for VIDchain when finalising an async process like a presentation request. Note that this is not the OIDC callback but the entity backend endpoint where the VIDChain APIs will send back the endpoint where to retrieve the verifiable presentation.
- `did`: This is field is only mandatory when the entity has more than one DID assigned.

And the assertion must be created using the following format:

```json
{
  "iss": <client-id>,
  "aud": "vidchain-api",
  "nonce": "z-0427dc2516d0" (random nonce),
  "apiKey": <the provided API key>,
  "did": <did method>
}
```

#### Obtain Bearer Token

To get the bearer token, a `POST` request has to be sent to the `/api/v1/sessions` endpoint with the following payload:

```json
{
  "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "scope": "vidchain profile entity"
}
```

The fields of the payload are the following:

- `grantType` The grant type specifies the grant type of the token, which is defined in our case as `urn:ietf:params:oauth:grant-type:jwt-bearer`.
- `scope` The scope describes the OpenID Connect scope which is in our case `vidchain profile entity`.
- `assertion` The assertion field has to contain as value the previous created assertion, described in section [Create an Assertion](#create-an-assertion).

An example response is shown below:

```json
{
  "accessToken": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QiLCJraWQiOiJ2aWRjaGFpbi1hcGkifQ.eyJzdWIiOiJFTlRJVFktTkFNRSIsImRpZCI6ImRpZDp2aWQ6MHg3OTc0ZGU2NTY4OEFiNTU0QWZENDk1NWMxMkYzQzk0MjdmM0E4QzFBIiwibm9uY2UiOiJ6LTA0MjdkYzI1MTZkMCIsImlhdCI6MTU5ODAyMjM0MSwiZXhwIjoxNjAwNjE0MzQxLCJhdWQiOiJ2aWRjaGFpbi1hcGkifQ.CbsJxbeMmZj8lS8k_-QH4zPLjvYcWjDDpZ7vrOGFq2R30ZSH4bCoZBz2Ra4LXYMkYjH_jPBikso667baudsI9w",
  "tokenType": "Bearer",
  "expiresIn": 1600614341,
  "issuedAt": 1598022341
}
```

The `accessToken` is the bearer token that needs to be included in calls to protected API endpoints.

## Set Up the OIDC Client

VIDchain supports the _OIDC Authorization Code Flow with or without PKCE_. The following information are required to register the client at VIDchain. Please provide these data by contacting the VIDchain support team [support@vidchain.net](mailto:support@vidchain.net).

- `client_id` : The client id is a string to uniquely identify your client when making calls to the OIDC provider.
- `client_secret`: The client secret is used to authenticate the client to OIDC Provider.
- `redirect_uri`: This URL defines the location where the OIDC Provider should redirect the user after the authentication flow is finished.
- (optional) `name`: This optional attribute defines the name of the entity displayed when logging in.
- (optional) `logo` : This optional attribute defines the image that will appear when user is logging in.

An example of OpenID client creation using Typescript and the [JSO client](https://www.npmjs.com/package/jso):

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

## Postliminary (Optional) - Modify your Entity

After the setup of the OpenID connect client is successfully finished, it is still possible to change some of the entity's attributes. Basically, it is possible to change the callback URL as well as the entity image. An example call is shown below and the request is authenticated using the bearer token.

- **HTTP call**:
  ```
  PUT to https://api.vidchain.net/api/v1/legal-entities/attributes
  ```
- **Authorization: Bearer token**
- **Body** :
  ```javascript
  {
    "callbackUrl: "https://<entity backend url>/<callback path>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAABfmlDQ1......" //optional
  }
  ```

Both possible fields of the body are optional, namely:

- `callbackUrl`: (optional) This callback URL describes the redirect location for VIDchain when finalising an async process like a presentation request. Note that this is not the OIDC callback but the entity backend endpoint where the VIDChain APIs will send back the endpoint where to retrieve the verifiable presentation.
- `icon`: (optional) This field expects the base64 encoded image that should be displayed when logging in.

<!--

## 4. Define the contents of the Verifiable Credentials

Verifiable Credentials contain details about the user to which they are issued. Verifiable Credentials typically contain a number of key-value pairs that describe attributes, or claims, about an individual. While this will be automated shortly, we are creating the credentials schemes manually for now. Then, you will need to prepare the list of items to include in your credentials.`


## 5. Integrate your web application using our API reference

Get ready to integrate VIDChain API in your web application by checking our OpenAPI specification in the following URL: [https://api.vidchain.net/api/v1/api-docs/](https://api.vidchain.net/api/v1/api-docs/)

The following endpoints are available to interact with our API:

![openapi-services](../_media/openapi-services.jpg)

-->