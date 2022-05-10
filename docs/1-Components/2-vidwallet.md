---
id: vidwallet
title: VIDwallet
---

An identity wallet represents one of the core components in an SSI system and so does it in VIDchain. Our identity wallet, the VIDwallet, is a smartphone-based identity wallet aiming to implement the digital counterpart of a physical wallet. This wallet is used by the users to store and protect their assets such as key material, identifier and personal information.

VIDwallet is designed to act ledger-agnostic meaning that it does not rely on a single DLT or blockchain network. VIDwallet supports already several DLTs and blockchain networks such as EBSI and Ethereum to just name two but it can also be used without distributed network utilizing the DID key[^1] method. Additionally, it does not only supports EBSI identifiers but is also fully EBSI compliant[^2] with their services.

## Features

- Users that use VIDwallet are in **full control over their own data** including identifiers, key material and credentials.
- VIDwallet is utilized to **store and mange personal information** in form of credentials.
- The VIDwallet also **manages key material** of users and stores them in a tamper-proof storage namely the secure element of the mobile phone.
- VIDwallet **provides an eKYC service** in which the users can use their legal identity card or passport in a KYC process resulting in an identity credential that has a strong data-to-user-binding.
- The **personal data are securely stored in encrypted form** so that only the user can access them by following DIF's confidential storage specification[^3].
- VIDwallet **supports a variety of DID methods** even without depency to a DLT or blockchain network.
- VIDwallet offers a service, VIDcerts, that **enables the transformation of X509 certificates into VCs** and stores the in the wallet.
- VIDwallet fulfilled the EBSI compliance tests and is **officially EBSI compliant** and listed as EBSI compliant wallet solution.
- The wallet application is **available for both Apple and Android devices**.

## VIDwallet Screens

VIDwallet provides five screens to the user, detailed as follows:

|   ![main-screen](../_media/start-screen.png)<p><b>The start screen is the credentials screen, which lists all stored credentials related to the holder. Also, new credentials can be added in this screen.</b></p>   |                         ![did-screen](../_media/did-screen.png)<p><b>In the identity screen, the users can list and select their available identifiers. This way, the support for multiple DIDs is achieved.</b></p>                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![qr-screen](../_media/scanqr-screen.png)<p><b>The scan QR-code screen is used to scan QR-codes that are used to establish a connection and for requesting credentials for data exchange or authentication. </b></p> | ![message-screen](../_media/messagecenter-screen.png)<p><b>The messages and notification center screen displays notifications and messages to the user. For instance, when a credential is requested or a new one is offered will be.</b></p> |
|            ![settings-screen](../_media/settings-screen.png)<p><b>The Setting screen displays the available settings to the user like for example the used environment or the display language. </b></p>             |                                                                                                                                                                                                                                               |

## Create Credential Workflows

Following, we present the main flows related to create a new credential including screenshots and a detailed description.

### Start Create Credential Flow

In this flow, the user starts on the start screen and selects "New Credential". Next, a screen is displayed which displays the identifier selection to the user. In the displayed case, three identifier are available because three were registered for the user. The number of identifier could also be higher or lower. After selecting one identifier the third screen is displayed with all possible ways to create a credential. The selected identifier will be used in the credential creation process as subject id.

| ![Start Screen](../_media/start-screen.png) | ![Select DID Screen](../_media/select-did.png) | ![Start Screen](../_media/create-credential-screen.png) |
| :-----------------------------------------: | :--------------------------------------------: | :-----------------------------------------------------: |

### Create Phone Number or Email Credential

This flow focuses on creating a phone number or email credential. When the user selects "connect to your phone number", the second screen will be displayed. Next, the user enters the phone number and will receive a TAN code which needs to be entered afterwards. In case of the email credential, the third screen is displayed. After entering the email address by the user, a code is sent to the email address which has to be entered afterwards. In both cases, after entering the correct verification code a credential is added to the list of credentials.

| ![Start Screen](../_media/create-credential-screen.png) | ![Select DID Screen](../_media/phone-number-screen.png) | ![Start Screen](../_media/email-screen.png) |
| :-----------------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------: |

### Create ID Document-Based Credential

| ![Start Screen](../_media/external-resources-screen.png) | ![Select DID Screen](../_media/verify-id-screen.png) | ![Start Screen](../_media/scan-passport-screen.png) |
| :------------------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: |

### Create Social Network-Based Credential

| ![Start Screen](../_media/external-resources-screen.png) | ![Select DID Screen](../_media/social-networks-screen.png) | ![Start Screen](../_media/connect-fb-screen.png) |
| :------------------------------------------------------: | :--------------------------------------------------------: | :----------------------------------------------: |

### Create Credential From A Bank Account

| ![Start Screen](../_media/external-resources-screen.png) | ![Select DID Screen](../_media/connect-bank-screen.png) | ![Start Screen](../_media/select-bank-screen.png) |
| :------------------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------------: |

## Get VIDwallet

VIDwallet is available for Android and Apple smartphones:

- [Android Version](https://play.google.com/store/apps/details?id=com.validatedid.wallet)
- [iOS Version](https://apps.apple.com/us/app/vidwallet/id1554340592)

## Test VIDwallet

Validated ID offers a tutorial for the users to get familiar with VIDwallet. The user journey of this tutorial focuses on a student that has a large family and wants to first, get a big family credential using the identity credential at the government page. And second, use this big family credential to get a discount on the studying fees. The tutorial describes all steps starting with the installation of the mobile app up to requesting the discount at the university.

**[Start Tutorial](https://try.vidchain.net/demo/tutorial)**

[^1]: https://w3c-ccg.github.io/did-method-key/
[^2]: https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets#find-a-wallet
[^3]: https://identity.foundation/edv-spec/
