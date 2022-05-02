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




## Get VIDwallet 
VIDwallet is available for Android and Apple smartphones:

- [Android Version](https://play.google.com/store/apps/details?id=com.validatedid.wallet)
- [iOS Version](https://apps.apple.com/us/app/vidwallet/id1554340592)

## Test VIDwallet

Validated ID offers a tutorial for the users to get familiar with VIDwallet. The user journey of this tutorial focuses on a student that has a large family and wants to first, get a big family credential using the identity credential credential at the government page. And second, use this big family credential to get a discount on the studying fees. The tutorial describes all steps starting with the installation of the mobile app up to requesting the discount at the university. 

Start the tutorial here: https://try.vidchain.net/demo/tutorial 

<!-- 
Once installed, the first time you open the app you’ll be asked to define a PIN code or to authenticate using your biometrics (used to encrypt the keys). As soon as you open the wallet, your keys will be created.
--> 

The application has four views:

- **Credentials**: list of all the credentials you own and store in your wallet.
- **Login**: where you can scan a QR code presented by a web page the user asks to authenticate in.
- **Notifications**: list of all the notifications you receive from a credentials provider, like .
- **Settings**

And also a top right (+) button that you can use to self-issue your first Verifiable Credentials.

<div align='center'>

![main-kyc](../_media/main-kyc.jpg ":size=30%")

</div>

[^1]: https://w3c-ccg.github.io/did-method-key/ 
[^2]: https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets#find-a-wallet 
[^3]: https://identity.foundation/edv-spec/ 

