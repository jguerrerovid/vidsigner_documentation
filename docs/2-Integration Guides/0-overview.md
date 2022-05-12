---
id: guides-overview
title: Integration Guides Overview
---

# Introduction

VIDchain offers several components such as VIDcredentials, VIDconnect, VIDwallet, and the eIDAS bridge. We provide integration guides to support our customers to integrate our components into their services.

More information on the components are available on the specific components page:

- [VIDcredentials](../1-Components/0-vidcredential.md)
- [VIDconnect](../1-Components/1-vidconnect.md)
- [VIDwallet](../1-Components/2-vidwallet.md)
- [eIDAS Bridge](../1-Components/3-eidas-bridge.md)

A detailed API description is available under:

- [VIDCredentials](https://docs.vidchain.net/vidcredentials-openapi)
- [VIDconnect](https://docs.vidchain.net/vidconnect-openapi)
- [eIDAS Bridge](https://docs.vidchain.net/eidas-bridge-openapi)

The integration guides provide the necessary information to integrate the VIDchain component into a target system. The provided information guide integrators step-by-step through the integration process.

## Guides Overview

The integration guides are structured in three main parts:

1. Some preliminary steps that need to be completed before the integration can be started as well as the setup of the OpenID client which is an essential part and needed for the integration.
   - The preliminary steps are described in section [Preliminary Steps](#preliminary-steps).
   - The setup of the OpenID connect client is described on the [Setup OpenID Client](1-setup-oidc.md) page.
2. VIDchain supports two scenarios to exchange credentials such as first the mobile app to web app and second the mobile app to mobile app.
   - The integration for web apps is covered in the [Integration for Webapps](2-integration-webapps.md) integration guide.
   - The mobile app to mobile app scenario is covered in the [Integraion in the App to App Case](3-integration-app2app.md) integration guide.
3. The eIDAS bridge integration is covered in the [Integration of the eIDAS Bridge](4-integration-eidasbridge.md) page.

## Preliminary Steps
