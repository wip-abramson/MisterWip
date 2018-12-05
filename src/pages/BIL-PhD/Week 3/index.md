---
title: "BIL Lab Week 3"
path: '/bil-week-3'
date: "2018-10-22T12:12:03.284Z"
featuredImage: "./images/blackford.jpg"  
---


It has been encouraging week for me, I am starting to see some real progress. Particularly my Rust development. Although also my Zero Knowledge knowledge has come a long way. Concepts that were foreign to me are becoming recognisable and even understandable.

My Monday was very relaxed. I took advantage of the Autumn sunshine in Edinburgh to take a walk up Blackford quarry while listening to an Epicenter [edisode](https://epicenter.tv/episode/116/) I was recommended. The walk helped me realise the importance of stepping back and thinking about what it is I think I have learnt. Giving my mind time away from a screen to digest all this new information. Plus the views over Edinburgh were stunning.

![Blackford Quarry](./images/blackford.jpg)

A highlight for me this week was beginning to implement relevant cryptographic code in Rust. I began working through a [tutorial](http://www.shirpeled.com/2018/09/a-hands-on-tutorial-for-zero-knowledge.html) that walks you through a Python implementation of a zero-knowledge proof for the satisfiability of the partition [problem](https://en.wikipedia.org/wiki/Partition_problem).  That is given a set of different sized partitions can you prove to me you know how to partition the set such that both sides are equal. Furthermore, can you do so without revealing any knowledge about your answer?

Working through a proof in code has been fascinating. Learning how this works in real life, how such a problem is formalised in code. I managed to iron out a question I had previously around what the role of a witness is in a zk-proof. As I understand it now, a witness is a function which the prover can use to provide responses to the interactive requests of the verifier while also appearing random enough as not to break the zero knowledgeness of a zk-proof.

An additional layer of difficulty came from this tutorial in python. I am implementing it in Rust. While a challenge, it ensures that I am understanding the python code and provides an excellent opportunity to further my Rust understanding.

This week I also restarted the [CryptoPals](https://cryptopals.com) challenges in Rust now I feel more confident with the language and the compiler messages it often spits out. From my experience learning new programming languages the most difficult part is getting from 0 to 1. From no knowledge to being about to write a program alone. I feel I am around 0.7 - not bad for 3 weeks!

On top of the Rust work, I spent a fair amount of time reading papers this week. Professor Bill and I decided to focus on a Monero [paper](https://getmonero.org/library/Zero-to-Monero-1-0-0.pdf). It was a beast at 92 pages long but provided a gentle introduction to concepts such as the discrete logarithm problem and Elliptic Curve Cryptography before building up to the more complex cryptography. Linked Ring Signatures, Range Proofs and Pederson Commitments. I  think I understand the concepts well, but some of the maths of how it works will require some further research.

My brief explanation of Monero would be: It is a privacy focussed cryptocurrency that masks both the sender and receivers addresses in a transaction. Monero also masks the amount sent within a transaction. 

To do this Monero uses a number of cryptographic techniques. Multilayered Linkable Spontaneous Anonymous Group Signatures to obscure the sender address. All you can tell is the sender originated from within the group or ring. Further reading for me [here](https://eprint.iacr.org/2015/1098.pdf).

It then uses Borromean Ring signatures of Pederson Commitments to transaction values plus some blinding factor. A Borromean Ring contains many unrelated Pederson Commitments for different transactions. The validity of a transaction is verified using Range Proofs. This checks that the sum of the inputs is equal to the sum of the outputs of a transaction. IE no new money has been created. This was probably the part of the paper I least understood.

Finally, the receiver generates a one time address using a random number communicated by the sender using the Diffie Helman Key exchange. The sender can then knows the public address of this one time address but only the receiver can work out the private key.

One interesting thing I found out about Monero is that each user has 2 public/private key pairs. One the sending key used to create transactions the other the view key can be used to scan the blockchain looking for transactions addressed to the user. This enables a user to share the view key in order to comply with regulation like an audit for example without compromising the funds within their account.

I am looking forward to discussing this paper with my supervisor on Tuesday!

This week I also attended a couple of interesting events, my first Scottish Blockchain meetup for interesting talks from both Liam and Bill on our lab and the tokenised world of the future. The second event saw me travel to London to attend the first London Sovrin Meetup.

The Sovrin meetup was a great event showcasing some real-world PoC's for Self Sovereign Identity. A particularly impressive one was [Truu](https://truu.id/) aiming to create verifiable credentials for doctors in order to tackle the ridiculous problem of having to provide all your documentation and fill in a load more forms every time you switch hospitals. I would love our lab to support the Truu application up in Edinburgh. Something like this highlights the potential of SSI to save everyone time and money, as well as creating a more secure and trusted system. And Truu is only one ecosystem. Imagine when I can use those same credentials to apply for a bank loan, or move house. There could be no more forms ever again.

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Amazing turnout for the first Sovrin London Meetup! <a href="https://twitter.com/hashtag/sovrinmeetup?src=hash&amp;ref_src=twsrc%5Etfw">#sovrinmeetup</a> <a href="https://twitter.com/hashtag/selfsovereignidentity?src=hash&amp;ref_src=twsrc%5Etfw">#selfsovereignidentity</a> <a href="https://twitter.com/hashtag/sovrin?src=hash&amp;ref_src=twsrc%5Etfw">#sovrin</a> <a href="https://twitter.com/SovrinID?ref_src=twsrc%5Etfw">@SovrinID</a> <a href="https://twitter.com/hashtag/beerandpizza?src=hash&amp;ref_src=twsrc%5Etfw">#beerandpizza</a> <a href="https://t.co/xAkZc0zo1e">pic.twitter.com/xAkZc0zo1e</a></p>&mdash; Jamie Smith (@jamiedsmith) <a href="https://twitter.com/jamiedsmith/status/1052979844164841472?ref_src=twsrc%5Etfw">October 18, 2018</a></blockquote>


It was great to catch up with some of the people I have met over the last year at similar events. I can't wait for the next one.

Next week will be more of the same for me. Reading some papers, writing some code. Hopefully, I will have finished the zero knowledge tutorial and will be able to share it. An exciting event happening on Wednesday is the Edinburgh MyData meetup. We are just heading to the pub, but Viivi the project manager of the MyData 2018 conference is in town and has offered to share her wisdom on the MyData vision and what it means to be a local hub. Should be a good one.