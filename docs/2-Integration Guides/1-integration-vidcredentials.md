---
id: integration-vidcredentials
title: Integration of VIDcredentials
---

### Register your Entity

In order to interact with VIDcredentials you need to register your entity. An entity represents a party that will be registered at VIDcredentials. This entity will hold the dids and keys used to issue credentials and will provide you access to verification services as well.

Please contact the VIDchain support team [support@vidchain.net](mailto:support@vidchain.net) for your entity creation.

:::tip
The VIDchain team supports the clients creating and registering an entity at VIDchain. Please contact [support@vidchain.net](mailto:support@vidchain.net) for support.
:::

Once your entity is created you will be provided with an identifier `iss` and an `apiKey`. Please, store them safely and do not share them. Doing so would allow others to have access to issue credentials in your name. Aside from these values, a default `did:ethr` DID will be informed to you. This did will be your identifier as an issuer.

:::info
VIChain supports currently the following DID methods such as Ethereum `did:ethr`, EBSI `did:ebsi`, Alastria `did:ala`, and the ledger-less `did:key` method.
:::

In case you prefer to use any other method, you can point it out when requesting your entity to be created. If you are not sure at that moment, do not worry, VIDcredentials service supports multidid enterprise wallets. Therefore, you can add new identifiers of any kind at your convenience.

### Authenticate to VIDcredentials

In this section we get into the details of [Login to VIDcredentials API Services](https://docs.vidchain.net/vidcredentials-openapi/login-to-vi-dcredentials-api-services).

:::info
VIDcredentials uses the _Bearer Token based Http authentication scheme_ for the client authentication towards the API.
:::

In order to authenticate towards the API, VIDcredentials uses the _Bearer Token based Http authentication scheme_. All requests to the API must contain the bearer token.

To obtain an access token an assertion has to be created. This assertion contains the attributes that identify your entity towards VIDcredentials. Creating an `assertion` consists on creataing a JSON encoded in `base64`.

The assertion payload contains the following fields:

- `iss`: The issuer field must contain the OpenID connect client ID to identify the entity on the VIDchain API.
- `nonce`: The nonce field should contain a randomly generated number only used once (nonce).
- `apiKey`: The API key provided by the VIDchain team during the registration has to be included in this field.
- `callbackUrl`: (optional) This callback URL describes the redirect location for VIDchain when finalising an async process like a presentation request. Note that this is not the OIDC callback but the entity backend endpoint where the VIDChain APIs will send back the endpoint where to retrieve the verifiable presentation.
- `did`: This is field is only mandatory when the entity has more than one DID assigned.

See the following example to check the assertion format:

```json
{
  "iss": <client-id>,
  "aud": "vidchain-api",
  "nonce": "z-0427dc2516d0" (random nonce),
  "apiKey": <the provided API key>,
  "did": <did method>
}
```

Once you have the assertion ready, remember to encode it in base64.

:::note
The assertion is a JSON encoded in `base64`.
:::

To get the bearer token, a `POST` request has to be sent to the `/api/v1/sessions` endpoint. Aside from the assertion other values are provided:

- `grantType` The grant type specifies the grant type of the token, which is defined in our case as `urn:ietf:params:oauth:grant-type:jwt-bearer`.
- `scope` The scope describes the scope which is in our case `vidchain profile entity`.
- `assertion` The assertion field has to contain as value the previous created assertion

Here you have an example of the payload to be sent to `/api/v1/sessions`:

```json
{
  "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJpc3MiOiJFeGFtcGxlIFVudmllcnNpdHkiLCJhdWQiOiJ2aWRjaGFpbi1hcGkiLCJub25jZSI6InotMDQyN2RjMTIzNDU2IiwiYXBpS2V5IjoiMTExMTNkZWYtMjIyMi0zMzMzLTQ0NDQtMTIzNDU2Nzg5MCJ9",
  "scope": "vidchain profile entity"
}
```

Once you perform the POST request, VIDcredentials will be able to authenticate your entity and provide you the access token you will need for consuming the rest of endpoints. An example response is shown below:

```json
{
  "accessToken": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QiLCJraWQiOiJ2aWRjaGFpbi1hcGkifQ.eyJzdWIiOiJFTlRJVFktTkFNRSIsImRpZCI6ImRpZDp2aWQ6MHg3OTc0ZGU2NTY4OEFiNTU0QWZENDk1NWMxMkYzQzk0MjdmM0E4QzFBIiwibm9uY2UiOiJ6LTA0MjdkYzI1MTZkMCIsImlhdCI6MTU5ODAyMjM0MSwiZXhwIjoxNjAwNjE0MzQxLCJhdWQiOiJ2aWRjaGFpbi1hcGkifQ.CbsJxbeMmZj8lS8k_-QH4zPLjvYcWjDDpZ7vrOGFq2R30ZSH4bCoZBz2Ra4LXYMkYjH_jPBikso667baudsI9w",
  "tokenType": "Bearer",
  "expiresIn": 1600614341,
  "issuedAt": 1598022341
}
```

It is the `accessToken` the bearer token that needs to be included in calls to protected API endpoints.

:::note
The bearer token is only valid for 15 minutes and should be refreshed during this time for continuously usage.
:::

### Ready to go

Once you know how to get an `accessToken`, you are free to start playing around with [VIDcredentials service](https://docs.vidchain.net/vidcredentials-openapi/introduction). In the OpenAPIs you will find all the details for issuing and verifying credentials and presentations.

Please, notice that with this authentication you are able to use VIDcredentials and eIDAS Bridge, since they are both authenticated in the same way. It **is not** the same case for VIDconnect. If you are interested in this last, please, contact VIDchain support team [support@vidchain.net](mailto:support@vidchain.net).

## Postliminary (Optional) - Modify your Entity

It is still possible to change some of the entity's attributes. Basically, it is possible to change the callback URL as well as the entity image. An example call is shown below and the request is authenticated using the bearer token.

- **HTTP call**:
  ```
  PUT to https://staging.vidchain.net/api/v1/legal-entities/attributes
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

- `callbackUrl`: (optional) This callback URL describes the redirect location for VIDchain when finalising an async process like a presentation request. Note that this is **not related to VIDconnect callback** but the entity backend endpoint where the VIDChain APIs will send back the endpoint where to retrieve the verifiable presentation.
- `icon`: (optional) This field expects the base64 encoded icon that should be displayed in VIDwallet. The app will see this icon in the credentials issued by your entity.

<!--

## 4. Define the contents of the Verifiable Credentials

Verifiable Credentials contain details about the user to which they are issued. Verifiable Credentials typically contain a number of key-value pairs that describe attributes, or claims, about an individual. While this will be automated shortly, we are creating the credentials schemes manually for now. Then, you will need to prepare the list of items to include in your credentials.`


## 5. Integrate your web application using our API reference

Get ready to integrate VIDChain API in your web application by checking our OpenAPI specification in the following URL: [https://api.vidchain.net/api/v1/api-docs/](https://api.vidchain.net/api/v1/api-docs/)

The following endpoints are available to interact with our API:

![openapi-services](../_media/openapi-services.jpg)

-->
