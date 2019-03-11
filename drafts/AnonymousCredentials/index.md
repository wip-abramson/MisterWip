---
title: "Anonymous Credentials"
path: '/anonymous-credentials'
date: "2018-12-18"
featuredImage: "./images/opening.jpg"  
---

A big part of my first ten weeks or so researching and reading around for my PhD has focussed on understanding the anonymous credential model for identity. This is at the most technical level a cryptographic architecture that enables individuals to prove ownership of credentials without needing to identify themselves. 

It is this model that forms the backbone of what are called Self-Sovereign Identity solutions. Sovrin, Veres One and basically anyone who are intending to implement the W3C standards under development for Decentalised Identifiers and Verifiable Credentials will be implementing an anonymous credential model.

Anonymous credentials try to replicate a physical credentials qualities; they are under the control of the user, unlinkable when presented and privacy preserving. When I present driving licence in a shop I get my licence issued by the DVLA from my wallet present the card to the shopkeeper for verification. The licence is accepted or rejected. I place the licence back into my wallet.

There are some key qualities here that phsical credentials inherently have but have long eluded digital ones. Wherever I present my licence, the DVLA does no know anything about this interaction preserving the users privacy. Furthermore it is almost impossible for a shopkeeper collude with other shops to link where and when a single license was presented. Also note, just seeing this physical license is enough information (assuming they verify and trust the license). No details are ever saved and recorded. Owning a credential is enough to provide authorisation without the need for authentication.

Anonymous credentials and the cryptography underpinning them present the opportunity to digitally replicate these qualities and as we will see not only replicate but enhance them. We are only just begging to see these solutions realised in a meaningful way, I hope this will lead to a sea change in the way we manage identities online.

What I find fascinating is that these ideas have been around for a while. They were first suggested by David Chaum in his paper in 1985 where he summarised the problem with the data siloed methods of identity management in use leading "organizations to routinely exchange data on individuals":

"The problems stem from the inability of anyone, particularly the individuals whose data is involved, to control or even effectively monitor such transfers. These problems were not present in completely paper based systems, where the transfer of information about an individual was only through credential documents issued to the one indivudal by one organization and show by the individual to other organizations."

I think Chaum showed tremendous foresight and we are still sufferring from the same problems today. Unwanted linkablilty across domains is eroding user privacy online. Sanonymous credentials present a viable Solution.

The literature Chaum's model has been further developed over time, with some impressive contributions from Jan Camenisch, Anna Lyskyanna and others. Culminating in a formal specification being released from IBM ZURICH
