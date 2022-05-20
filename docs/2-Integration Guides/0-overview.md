---
id: guides-overview
title: Overview
---

# Introduction

VIDchain offers several components such as VIDcredentials, VIDconnect, VIDwallet, and the eIDAS bridge. We provide integration guides to support our customers to integrate our components into their services.

More information on the components are available on the specific components page:

- [VIDcredentials](../1-Components/0-vidcredential.md)
- [VIDconnect](../1-Components/1-vidconnect.md)
- [VIDwallet](../1-Components/2-vidwallet.md)
- [eIDAS Bridge](../1-Components/3-eidas-bridge.md)

A detailed API description is available under:

- [OpenAPI VIDCredentials](https://docs.vidchain.net/vidcredentials-openapi)
- [OpenAPI VIDconnect](https://docs.vidchain.net/vidconnect-openapi)
- [OpenAPI eIDAS Bridge](https://docs.vidchain.net/eidas-bridge-openapi)

The integration guides provide the necessary information to integrate the VIDchain component into a target system. The provided information guide integrators step-by-step through the integration process.

## Guides Overview

The integration guides are structured in three main parts:

1. We start with the description of the setup of the OpenID connect client together with preliminary steps are detailed. In detail, the description is split into two parts:
   - The setup of the OpenID connect client is described on the [Integration of the OpenID Client](1-setup-oidc.md) page.
   - The preliminary steps are described in section [Preliminary Steps](1-setup-oidc.md/#preliminary-steps).
2. VIDchain supports two scenarios to exchange credentials such as first the mobile app to web app and second the mobile app to mobile app.
   - The integration for web apps is covered in the [Integration of VIDconnect](2-integration-vidconnect.md) integration guide.
   - The mobile app to mobile app scenario is covered in the [Integration of VIDwallet](3-integration-vidwallet.md) integration guide.
3. The eIDAS bridge integration is covered in the [Integration of the eIDAS Bridge](4-integration-eidasbridge.md) page.
