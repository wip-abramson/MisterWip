---
title: "Overlays for Data Extraction"
path: '/accountability'
date: "2018-12-11"
featuredImage: "./images/HealthAccountability.png"  
---

The idea behind these overlays would be to add layers on top of an anonymous credential identity system where entities interact with unique, unlinkable pseudonyms. These layers would allow, well defined and agreed apon contextual information to be extracted from multiple pseudonymous interactions across different unlinkable DID connections. These stores of data could have many uses, a research study, accountability information, a common health record, a shopping profile and probably many more. 

I still struggle with this idea, so bare with me. Please ask questions, or let me know if you have a reason why this is infeasable.

The basic principle would be that a data extraction overlay can be applied individually to pairwise DID connection. But the question then arises of which party applies the overlay, and should one be able to apply such an overlay without the other party knowing?



User control would be the key to this, with them being ultimately in control of which data extraction overlays they apply to which pseudonymous connections.

I see two differing reasons for using these overlays. Firstly to create a common profile by extracting information and context from across many anonymous connections. I see this as akin to the profiles that google and facebook build from peoples interactions across the web today. The difference being that this would be transparent with the overlay clearly defining what information was being collected. Also that the data store could be under the primary control of the individual the data was extracted from.

These overlays could be produced by anyone, there could be well defined standard overlays for this, or more specific and tweaked exactly to match a users preference. Only a user can apply this overlay to their connection. 

Questions that arise:

* Does a user applying this overlay have to tell the relying party?



# An Example: A Shopping Profile

A consortium of shops come together to figure out a privacy preserving overlay which when applied by a shopper extracts the relevant information into a data store under the individuals control. By sharing access to the data store with shops they are interacting with it allows the shops to more accurately suggest products. Note: while the shops defined the extraction overlay, it is the shoppers who have to both apply the overlay and share access to the extracted data. This means the shops are incentivised to define an overlay that users will deem acceptable.

While this may seem onerous on the user, one can imagine most of this handled by the agent. Where only on the first interaction between the individual and the shop overlay preferences are specified.

# An Example: Emergency Health Profile

The NHS create an overlay defining attributes they need to know in an emergency. Things like blood type, blood pressure, medication, health issues. Anything that they realise is urgent for them to know in an emergency. Patients would then be strongly recommended, but NOT required to apply this overlay to all pseudonymous health interactions. This could be further automated by your agent who knows to apply it to any connection where the entity proves they work for the NHS. By applying this overlay to all health interactions doctors could be sure that when accessing this emergency record they are viewing an up to date health record.

The question that  arises from this for me is where does this data get stored? In an emergency a a doctore needs to access this record as fast as possible but the patient may not be in a state to provide access. This could be stored with the NHS, but then still how do they locate your record and how do we ensure this isn't just another centralised store of personal information?

These are open questions, that I ponder as I think about this. I think these are solvable problems though and could potentially lead to an improvment in the ability for doctors to respond in an emergency situations.



The second use case for data extraction overlays I envision is in compliance/regulation. This comes from me questioning the rules around KYC/AML and asking how a bank or financial institution can be both compliant whilst interacting anonymously with their customers. I have to admit I do not know the rules very well, but I understand it certain institutions must keep a record of their customers for X number of years in order to be able to comply with the regulations.

I suggest extraction overlays as a way for customers complying with the regulations while enabling them to be confident their personal data isn't being misused and in fact is never seen unless absolutely necessary to comply with the rules.

How it might work.

* The "authorities" define an overlay for KYC, including the policy with which it can be accessed.
* Banks REQUIRE customers they connect with to apply this overlay
* Overlay extracts and encrypts information, this is passed to the regulating bodies 
* Customer can prove to the bank the overlay has been applied to connection and correct attributes have been encrypted under correct policy
  * This is sufficient for the bank to interact with the customer.
* Later if a bank or regulators reviewing a bank needs to hold a customers DID accountable for its actions it requests to the regulating body with reasons for request.
* If reasons are valid then it can decrypt the information extracted from overlay.
* The customer must know about this process. Can be no way to deanonymise information without the customers knowledge.



The idea here is that personal data collection is exlpicit. You could imagine data collection for a whole load of different laws and regulations

Intuitively an entity can interact anonymously with my service, however they have to fulfil these accountability overlays which enable the organisation to fulfil the regulatory requirments of the authorities. As well as giving the organisation a pathway for recourse should the anonymous entity act outside of some paramenters.

Now questions of how this information is stored and who is in control of it become more difficult. The information clearly cannot be under the control of the individual because they may cheat and alter the information.

How can an organisation be sure that these attributes committed to 







