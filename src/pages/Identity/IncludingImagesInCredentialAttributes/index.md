---
title: "Verifiable Image Attributes Using IPFS"
path: '/vc-images-ipfs'
date: "2020-03-20"
featuredImage: "./images/ipfs.png"  
---

This is a quick(ish) explainer and how-to guide for including images inside a Verifiable Credential attribute in such a way that a Verifier can load the image and verify it is the same as the image attested to by the issuer. The problem with an image and probably most files is that their size is greater than a credential attribute was designed to store. Meaning the simple solution to base64 encode the image and include the encoding in a credential attribute will not work.

There are two alternative approaches that I have come across previously for implementing this. Perhaps the ideal solution, that will be used in the future involves a Hyperledger Aries concept called a [decorator](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0011-decorators). They provide a way to convey metadata associated with certain communication patterns, I am told it is possible to use decorators to send file attachments over [DIDComm](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0005-didcomm). Indeed the RFC shows that [aries-cloudagent-python](https://github.com/hyperledger/aries-cloudagent-python) codebase has implemented this. I am yet to explore this for myself, so do not know much more than that. I imagine works by attaching a file to a verifiable credential presentation that includes the hash of that file as one of the attributes. This solution is Self-Sovereign and decentralised. Assuming an issuer has seen the file, created a hash of it and issued it as an attribute of a Verifiable credential. The holder simply needs to prove this file hash attribute along with the file, which they can store wherever they choose, to whoever they wish to prove this verifiable file to.

However, the reality today is that this solution is immature and infeasible for most projects despite them still requiring images to be included within credentials in their system. After all, an image is a biometric we as humans are all used to verifying against the holders face. We trust it. We have much less understanding, and hence trust, in the underlying cryptography that allows the verification of attribute integrity and it's authenticated origin. Even if we do place trust in the cryptography, an image is a great way to link a physical human with the digital identifier they are using the represent themselves.

The viable solution today is similar to the ideal solution but compromises on decentralisation. Rather than images being passed by the holder along with proof the hash of that image was issued to them, the images are hosted in a central location and holders prove both the URL location and hash of the image within a credential presentation. The verifier can then use the URL to pull down the image, hash it and compare the hash with the hash presented.

The problem with this solution, other than the compromise, is the complexity involved when implementing it. There are a lot of decisions to be made about the architecture and associated infrastructure. Let's have a look.

### Holder Receives Credential which includes an Image

1. The Issuer must be able to get the image in order to hash it
   1. Probably the most common case, the issuers takes the picture.
   2. Or the holder needs some way to communicate the image to the Issuer
2. The Issuer must hash the image, ensuring its integrity is verifiable down the line.
   * This probably includes some communication from an F/E interface that captured the image to a B/E system that can compute the hash.
3. The image the issuer has hashed must be stored in a location that is accessible by future verifiers so the image can be verified cryptographically and rendered for biometric verification.
   1. Should the issuer self host these images?
      * Must include the URL of image location in the credential.
      * Adds risk to the issuer.
      * Still have to decide what the best tool for self-hosting images is and implement this.
      * Privacy risk, the issuer will know every time the holder has presented credential with an image url in.
   2. Should there be a central image repository accessible to the whole ecosystem?
      * Risk of centralisation, a honeypot for attackers.
      * Who is responsible for maintaining and hosting this repository?
   3. Should the issuer communicate the image back to the holder and let them handle this responsibility?
      * As discussed, this is not feasible over DIDComm yet.
4. Credential attributes, including image hash and image location (URL) are digitally signed and issued to the holder.

### Holder Presents Credential which includes the image

1. Holder creates a proof including the hash and image URL attributes.
2. Verifier first verifies cryptography of the attributes
3. Verifier must pull image from wherever it is stored - the URL
   * Need to be able to access this url. How do we manage access control?
4. Verifier hashes image and compares the hash to attribute in the proof
   * Verifier must use the same hash function as the issuer.
5. Verifier needs to communicate the image to the UI in order for a biometric check to take place.

# Using IPFS

As you can see there are a lot of design decisions to be made. I think many of these can be simplified through the use of the [Interplanetary File System (IPFS)](https://ipfs.io/). It is a great tool that has come out of the *web3* innovation boom, that I have only just got round to trying out. It describes itself as:

> A peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open.

It's website has a great [section](https://ipfs.io/#how) on how it works so I won't go into detail. Essentially it's a content addressed (think hash) file system, with each node storing the content that they are interested in.

What is really awesome about it though, it's incredibly easy to use. You can download IPFS and have a node running within minutes. Both the F/E and B/E systems can talk to an IPFS node, meaning communication complexity of systems can be reduced.

Plus it is ideal for storing [images](https://medium.com/@angellopozo/uploading-an-image-to-ipfs-e1f65f039da4) and simply storing anything on IPFS creates a hash of that content. Perfect for including in a credential attribute. Let's go over the example where the issuer takes the holders photo and wants to issue it as part of a credential.

### Issuance 

1. Issuer takes a photograph and uploads into a F/E user interface.
2. The F/E can store this image on an IPFS node, producing a hash of the image.
   * It must either be running it's own node, or know the url of the node it wishes to interact with.
3. The hash, a simple string, can be easily passed to the B/E of the issuer's system.
4. The issuers includes the received hash in a credential attribute which it proceeds to issue to the holder

### Verification

1. Holder presents proof containing image hash to Verifier
2. Verifier first checks the image hash hasn't been tampered with and was indeed issued by the issuer.
3. Verifier B/E can return this image hash to the F/E
4. F/E can connect to the IPFS node and resolve the image using this hash
   * Note: This must be the same node that the image was written to unless IPFS nodes are [networked together](https://medium.com/@rossbulat/introduction-to-ipfs-set-up-nodes-on-your-network-with-http-gateways-10e21ea689a4)
5. F/E can easily display this image to a human Verifier



**Put simply IPFS greatly simplify the flow and design decisions required when issuing an image as part of a credential.**

* You only need to include one attribute in your credential schema rather than two.
* You don't need to worry about communicating images between B/E and F/E. I am sure this isn't all that have but have always run into issues with this.
* Hashing is handled by IPFS so everyone will use the same hash function.
* IPFS is the storage, so that decision is made for you.



In fact, the only decision that requires some thought, I would say, is whether you run a single IPFS node that all issuers and verifiers within a system know about. Or whether each entity runs it's own node and these nodes are networked together so that they can fetch files based on their hashes from each other. The first is simpler, but the second is probably preferable.


[Here is the original HackMd, if you want to add any comments etc.](https://hackmd.io/@Ti3_tF0GSdmgraRb0Mx1mQ/ByPbczG88)
