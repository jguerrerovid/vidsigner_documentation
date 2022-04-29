---
id: vidcredential
title: VIDcredential
---

VIDcredentials is a component of VIDchain that is responsible for handling credentials and the interaction with the other components is illustrated in the figure. The main functionality of this component is: 

1. Creating credentials in a certain format 
2. Signing the created credentials using the credential signing manager 
3. Managing the schemas for credentials including 
4. Providing a revocation manager that takes care of the revocation process 

The VIDcredentials components interacts with external parties such as the credential issuer, but also with VIDchain components such as the VIDchain API (VIDchain's backend). 





![vidcredentials](../_media/vidcredentials.png)
