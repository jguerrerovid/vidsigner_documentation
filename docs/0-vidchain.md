---
id: intro
title: VIDchain
---

# Introduction

VIDchain is a product of [Validated ID](https://www.validatedid.com/), a Spanish Qualified Trust Service Provider, providing Self-Sovereign Identity (SSI) and related services. SSI is a rather new concept for managing digital identities with the main goal to return the control over identity data back to the users. If you are interested in further explore SSI and its potential please check out our [SSI Whitepaper](https://www.validatedid.com/vidchain).

## Documentation Overview

This documentation presents several layer of information starting with general information for the general public and everybody that is interested in VIDchain up to integration guides together with a detailed API description for architects and developers to be able to integrate VIDchain services into their systems. The documentation is structure in the following four sections:

1. [VIDchain](0-vidchain.md): This page presents an overview of VIDchain including its components.
2. [Components](1-Components/0-vidcredential.md): The important components are detailed in the specific components section.
3. [Integration Guides](2-Integration%20Guides/0-setup-oidc.md): The integration guides detail the necessary steps for the integration of our services into target systems.
4. [API Specifications](https://docs.vidchain.net/vidchain-openapi): The integration guides are supported by detailed API specification.

## Main Features

To highlight the advantages of using VIDchain as SSI services provider, we list following the main features of our services:

- By using our services including the identity wallet, users are in **full control over their own identity data**.
- Our provides services are **fully GDPR-compliant**. By utilizing our services, customers will not have to worry about GDPR compliance.
- SSI vendors often depend on a distributed ledger (DL) or blockchain network. VIDchain offers flexibility by **being fully ledger agnostic**. In fact, VIDchain services can operate even without DL or blockchain but nevertheless, VIDchain is integrated with several DLTs.
- VIDchain offers a **passwordless authentication flow**, which increases not only the user-experience but also the security since users tend to resuse username-password combinations or use-easy-to-guess passwords.
- VIDchain services can be **integrated and used on different platforms** such as in the web or on a webapp or mobile app.
- VIDchain offers a service to **manage and handle credentials including, creating, signing, issuing, storing, revoking, exchanging and presenting verifiable credentials**.
- VIDchain **binds legal entities to verifiable credentials**. Legal entities such as natural and legal persons are often represented by X509 certificates. This binding is achieved by our so-called eIDAS bridge. By sealing the verifiable credential with a qualified certificate, also **legal value is added to the verifiable credential** and can be verified afterwards.
- Users might own a personal certificate containing the users' attributes. VIDchain offers a service to **transform a X509 certificate into a valid verifiable credential**.

## Components Overview

VIDchain is composed of different building blocks depicted in the architecture figure and listed below:

- [VIDcredentials](1-Components/0-vidcredential.md), this component's main purpose is to handle credentials and credential related data. Handling credentials includes creating, signing and verifying verifiable credentials, but also managing schemas and the revocation management.
- [VIDconnect](1-Components/1-vidconnect.md), an OpenID Connect provider that is able to perform a DID authentication process. The OpenID Connect SIOP library, a Typescript library, that you can use from your app to exchange credentials with the VIDwallet.
- [VIDwallet](1-Components/2-vidwallet.md), a mobile application used by end-users with the main purpose to manage and store their key matrial and personal information such as identifiers and credentials.
- [eIDAS Bridge](1-Components/3-eidas-bridge.md), the eIDAS Bridge is a project that aims to bridge legal entities based on X509 certificates with W3C based verfiable credentials.

![vidchain-components](_media/architecture.png)

<!--
# This guide

This document provides information on how to use the VIDchain API to:

- Authenticate your users (using standard OpenID Connect!)
  - on your web or webapp
  - on your mobile app
- Issue credentials
- Request credentials
  We'll also show you what do you need to do to register as a client to use VIDchain OpenID provider.

The guide is divided in two parts: the **configuration** part and the **tutorial**. The former provides an overview of the items needed in order to be ready to start the tutorial. Therefore, please read the requirements first so as to get ready for the integration.

- Step 1: [Setting things up & other requirements](/docs/VIDchain/requirements)

  - [Setting up your OIDC client](/docs/VIDchain/requirements#set-up-your-oidc-client)
  - [Create your entity DID](/docs/VIDchain/requirements#create-your-entity-did)
  - [Accessing the API: API Bearer Token Authentication](/docs/VIDchain/requirements#client-id-and-entity-session-key-registration-prod-api-only)
  - [Define the contents of the Verifiable Credentials](/docs/VIDchain/requirements#define-the-contents-of-the-verifiable-credentials)

- Step 2: Web or mobile? Once you have set things up, you can interact with the wallet from your backend or directly from your mobile app:
  - Integrate your [web or webapp with VIDchain](/docs/VIDchain/tutorial)
    - [OIDC flow for DID Auth](/docs/VIDchain/tutorial#oidc-flow-for-did-auth)
    - [Issue Credentials](/docs/VIDchain/tutorial#issue-credentials)
    - [Request and Verify credentials](/docs/VIDchain/tutorial#request-and-verify-credentials)
    - [Present and Verify credentials](/docs/VIDchain/tutorial#present-and-verify-credentials)
  - Integrate your [mobile app using DID SIOP](../4-sioplib.md)

-->

<!-- move links to proper places -->

## Links and References

- [Validated ID Website](https://www.validatedid.com)
- [VIDchain Website](https://www.validatedid.com/vidchain)
- [VIDchain OpenAPI Specification](https://docs.vidchain.net/vidchain-openapi)
- [VIDconnect OpenAPI Specification](https://docs.vidchain.net/vidconnect-openapi)
- [VIDchain Demo Site](https://try.vidchain.net/demo)
