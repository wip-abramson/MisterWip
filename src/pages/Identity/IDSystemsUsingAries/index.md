---
title: "Developing Identity Systems Using Hyperledger Aries"
path: '/aries-dev'
date: "2020-03-18"
featuredImage: "./images/aries.png"  
---

**TLDR: if you are going to read one thing the read this about the general [Trust over IP stack](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0289-toip-stack)**

[Hyperledger Aries](https://github.com/hyperledger/aries-rfcs) is an open source project and specification for developing software [agents](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0004-agents) that can communicate across secure cryptographic channels. The can communicate any messages using a protocol called [DIDComm](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0005-didcomm), however they are specifically designed to issue and present [Verifiable Credentials](https://w3c.github.io/vc-data-model/) based on [anonymous credential cryptography](https://wip-abramson.dev/cl-signatures).

The specification is being implemented in numerous coding languages; [python](https://github.com/hyperledger/aries-cloudagent-python), [ruby](https://github.com/hyperledger/aries-sdk-ruby), [golang](https://github.com/hyperledger/aries-sdk-ruby) and [dotnet](https://github.com/hyperledger/aries-framework-dotnet) to name a few. The idea being that you can develop a aries agent in a language of your choice and be able to interact with any other agent that follows the aries rfcs. There is an [interoperability profile](https://github.com/hyperledger/aries-rfcs/tree/master/concepts) which defines which rfcs should be implemented to which version.

I have the most experience with the python code base which has largely been developed by the government of [british columbia](https://github.com/bcgov) who have been doing great things with this tech. This [video](https://zoom.us/recording/play/Pr-gdxAUVciy7MtPE9tkNAuSLT_Pl_NEYMeW2XxQRitjXtQajl3X5y7L_A1CCRee?autoplay=true&startTime=1563894122000) gives great deep dive of the architecture of aries agents. 

An easy way to get started with a fully functioning hyperledger aries agent, controller and user interface can be found in this [repo](https://github.com/bcgov/aries-cloudcontroller-node). If you check out the demo-finish branch you can spin up the a full ecosystem, with 3 agents alice, faber and acme using docker. The UI's for the agent exists at localhost:4200-4202. If you look at the docker-compose.yml file, it should give you a good idea of the setup. The current UI used can be found in this [repo](https://github.com/bluecollardev/edx-ariescloud-client) and is written in angular. I have been working to replicate something similar in React, this can be found [here](https://github.com/BlockchainIdentityLab/react-ariescloud-client). **It is not feature complete yet!** If you simply swap this repo url with the context for any of alice-web, faber-web or acme-web in the docker-compose.yml of the controller repo you will spin up an agent with the react UI. You can actually pull the project down locally, point to the folder rather than the repo url then edits to the UI will be updated while running the whole system.

My recommendation is that we continue developing this react repository to fulfil the needs of covid screening identification use case.

The only other thing to mention is that these agent code bases tyically are specialised for organisations, who will be running webservers etc. The other type of agent is a mobile agent, that works on the mobile phone. The team at [streetcred](https://developer.streetcred.id/) have a mobile agent in the app store for both android and apple that should work with aries agents spun up using this controller and react UI. This still needs to be verified though.

Finally, I recommend joining the [Hyperledger rocket chat](https://chat.hyperledger.org/home). Channels for #aries and #aries-cloudagent-python are relevant. You can reach out to me on their or on the openmined slack - @wip.

You can find the original HackMd [here](https://hackmd.io/@Ti3_tF0GSdmgraRb0Mx1mQ/covid-pp-screening-auth/edit), if you want to add any comments.
