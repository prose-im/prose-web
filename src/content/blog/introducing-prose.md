---
title: "Introducing Prose"
description: "Decentralized Team Messaging in an Era of Centralized SaaS"
cover:
  src: "/blog/introducing-prose/prose-macos-login.jpg"
  alt: "An image showcasing My Page."
head:
  meta:
    - name: "keywords"
      content: "prose"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Prose"
    - name: "copyright"
      content: "© 2023 Prose"
---

Nowadays, almost every company is using messaging tools within their teams. Such tools help businesses boost productivity. They (almost) entirely replaced email. But there’s a hitch: those new platforms are all centralized. From Slack, Skype for Business to Microsoft Teams, or the now-defunct HipChat, all company’s industrial secrets & small talk get relayed and stored on centralized cloud servers (located mostly in the US). The exact same is happening to personal communications, with Facebook Messenger, Telegram, WhatsApp and iMessage.

While the Internet makes decentralization technically possible and desirable, it is not a de-facto requirement for service operators. Instead, all VC-funded companies have a strong economic incentive to centralize, as a means to concentrate more value in their walled gardens. While this centralized model is efficient at building $1B+ public companies, it goes against what the Internet was built for.

On the side, it has been more than 20 years that a modern open messaging standard was invented: [XMPP](https://xmpp.org/) (_I am not mentioning [IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) and the likes here, as those cannot be considered “modern” anymore_). Those open protocols, while mature and supported in a wide range of servers, lack the applicative ecosystem they deserve: existing apps are mostly made for techies (_want to chat in the terminal?_). This, in part, explains why Slack and its competitors won the war so far.

**It’s time to change the status quo with Prose**, a native cross-platform team messaging app, built on solid foundations, thanks to the XMPP standard. This article announces the [Prose project](https://prose.org/), which I am starting aside from [Crisp](https://crisp.chat/), my main business.

<markdown-image src="/blog/introducing-prose/prose-macos-login.jpg" alt="Hello World. This is Prose" caption="Hello World. This is Prose"></markdown-image>

## A Short History of Team Messaging

Instant Messaging first penetrated our personal lives in late 1996, with the advent of ICQ. This redefined the way we communicate with friends and loved ones, at a time businesses were still massively using email (or old-fashioned telephone & fax).

IM quickly became ubiquitous with WhatsApp, iMessage and Facebook Messenger in the early 2010s. At the same time, online communities were using IRC or XMPP to gather hundred of people in group chats, while businesses were still… using email, which enabled G Suite and Outlook to thrive.

The [XMPP standard](https://en.wikipedia.org/wiki/XMPP), introduced as “[Jabber](https://en.wikipedia.org/wiki/Jabber)” in 1999, set out to build a modern open and extensible instant messaging standard. Servers and clients (ie. applications) were to implement the protocol and interconnect, forming a decentralized network. Anyone willing to join the network as a user can choose a public XMPP server, and register for an email-looking address like: `john.doe@acme.com` (called [Jabber ID](https://en.wikipedia.org/wiki/JID_(Jabber))). In that regard, XMPP can be compared to the way email operates. XMPP quickly became popular in online and open-source software communities, alongside IRC.

Slack, launched in 2013, went on a mission to redefine how people communicate within the workspace. It aimed at making team messaging more efficient & instant, and replace old-fashioned mailing lists with Slack channels. While in the first years, early adopters were mostly tech-savvy companies, startups and communities, Slack then gained traction in more traditional businesses, schools, universities and large corporations.

More recently, team messaging services have seen their user base explode. During the COVID-19 pandemic, a lot of businesses were forced to use Slack or competitors. This pushed businesses away from email — _which is a standard protocol forming a decentralized network_ — to proprietary centralized walled gardens, whether it be Slack or Microsoft Teams. On the side, [Mattermost](https://mattermost.com/), an open-source self-hosted Slack alternative, is also used by a smaller number of organizations, though it was not built on any standard. This sadly defeats interoperability and inter-team connectivity.

Today, [Slack is owned by Salesforce](https://techcrunch.com/2020/12/01/salesforce-buys-slack/), which operates as a huge conglomerate of SaaS services, while Microsoft Teams and Skype for Business are ran by Microsoft. This means that two large US corporations dominate the market of workspace messaging, _worldwide_. To me, this looks like an unhealthy duopoly. 43% of Fortune 100 businesses pay to use Slack, but note that Microsoft [dominates almost all](https://dispatch.m.io/enterprise-messaging-wars-slack-microsoft-teams/) of the market with Skype and Teams.

## Team Messaging in an Ideal World

**Person-to-person interactions should be kept private in all situations**, regardless of the importance of what is being discussed. From small talk to handing over the designs of a revolutionary nuclear fusion reactor that works, messages should not get exchanged via a single middleman. Rather, each company should have the choice of which cloud server relays their message. If they are not happy with the available cloud offerings, they should be able to deploy the system on their own premises. They would have _choice_ as to where their data lives.

Neither should users not trust their own server. In fact, messages may sometimes unintentionally get read by engineers while debugging something on the server. Logging could also sometimes be intentional, eg. for espionage or law enforcement purposes. Therefore, **the applications that people use must enforce end-to-end encryption**. A message that gets end-to-end encrypted can only be opened by its recipient, because only the sender and the recipient are aware of the cryptographic key that lets them decrypt it. _Note that this fantastic privacy feature already exists under the [OMEMO](https://en.wikipedia.org/wiki/OMEMO) standard, which is available within the XMPP protocol._

We usually do not tolerate that other people listen to our real-life conversations, say in a public café. On the contrary, we do not seem to be _that_ concerned by the privacy of the conversations we have on the Internet via private messaging. This is exactly what is happening today. We relay our conversations through huge centralized services, that ingest and forward messages for 100s of millions of people daily. Not only do they relay messages, but they also store them in the clear for history purposes. This means that someone in the future could go back in time through anyone’s conversations.

Moving back communications to a decentralized model also makes the whole system resilient against potential worldwide network fragmentation in the future. What would happen in the event of a new World War? Some countries, like China and Russia, already implement some level of "Internet within the Internet" with eg. the [Great Firewall](https://en.wikipedia.org/wiki/Great_Firewall), and therefore can block access to a messaging platform (as it once was with [Telegram in Russia](https://en.wikipedia.org/wiki/Blocking_Telegram_in_Russia)). In the event of a worldwide conflict between two blocs, the Internet could be split into two independant networks. For instance, certain IP addresses could be made un-routable in certain countries. What happens, then, if all your centralized messaging services are hosted on the other side of the virtual "wall"? Decentralization guarantees that systems stay resilient against network fragmentation, as only a subset of your teammates or friends would become unreachable, while you could still communicate with people who are within your side of the Internet. _That is worst-case scenario, not to say that this could actually happen — but hey, who knows what the future is made of_.

## The Choice of the XMPP Standard

![Logo of the XMPP Protocol](/blog/introducing-prose/xmpp-logo-wide.png)

**XMPP is a 20+ years old messaging protocol**. Its acronym stands for Extensible Messaging and Presence Protocol. The extensibility of the protocol is especially important, as it lets engineers add new features over time, in order to keep the protocol in line with modern uses (eg. chat stickers were not a thing twenty years ago, though now they are — this has been covered under [this protocol extension](https://xmpp.org/extensions/xep-0449.html), aka _XEP_). Since those features are being built as protocol extensions, the protocol foundations are left clean & untouched, which is a desirable trait of a durable protocol.

Being **stable and mature**, XMPP has all the required properties for a project with a long-term vision. Furthermore, all features Prose aims to develop are already available within the XMPP standard (eg. end-to-end encryption is covered under the [OMEMO XEP](https://xmpp.org/extensions/xep-0384.html), calls are covered under the [Jingle XEP](https://xmpp.org/extensions/xep-0166.html), while user profiles are handled by the [vCard4 over XMPP XEP](https://xmpp.org/extensions/xep-0292.html)).

<markdown-image src="/blog/introducing-prose/prose-macos-login.jpg" alt="A simplified scheme of how users and servers for different teams interact on the XMPP network." caption="A simplified scheme of how users and servers for different teams interact on the XMPP network. Users are hosted on a server. Servers connect to each other. Note that while some servers are self-hosted, I expect a majority of organizations to use third-party cloud hosting, for the convenience it provides. This cloud service could be provided by Prose itself."></markdown-image>

Multiple good-quality open-source XMPP server implementations are available, such as [ejabberd](https://www.ejabberd.im/), [Prosody](https://prosody.im/) or [OpenFire](https://www.igniterealtime.org/projects/openfire/). Those servers can be connected-to by any client application over the XMPP protocol. Servers can open connections to each other, so that users on different servers can communicate (exchange messages, call each other, view profiles, etc.). Instead of reinventing the wheel, those servers can be used as a foundation to build great user-facing applications.

As well, XMPP client libraries are available, such as [libstrophe](https://strophe.im/libstrophe/). A client library manages the connection to an XMPP server and handles packet routing and parsing with a clean abstraction layer. That way, application developers can focus on implementing UI and application logic, leaving the connection management and obscure protocol work to the underlying XMPP client library.

Note that I am not by any means new to the world of XMPP. I taught myself how to code by starting [Jappix](https://github.com/jappix/jappix), **the first ever Web-based XMPP client**, at a time where Web apps were not (yet) a thing and Google Chrome just came out. Jappix was used by communities, businesses and organizations such as [CERN](https://home.cern/) (the European Council for Nuclear Research; [proof](http://indico.eblida.org/ihelp/html/Chat/XMPPClients.html)), at a time Slack and similar did not yet exist.

**Prose is the culmination of what I started with Jappix 10 years ago**. It will be built on my past experience of working with the XMPP protocol.

_By the way, I made a public presentation of XMPP 5 years ago, [available in those slides](https://www.slideshare.net/ValrianSaliou/xmpp-technical-overview-jingle-protocol-study). They can help you get a quick technical overview of how it works (audio comments not available)._

## Prose Project Vision & Timeline

The Prose project has been started to provide organizations of all sizes with a first-class alternative to Slack and Microsoft Teams. Think of the Prose project mission as one of liberating person-to-person workspace communication, from messaging to audio & video calls.

### What will be built

Prose will start small. **A native app for macOS will be released in 2022**, then its mobile version for iOS later the same year. Finally, support on other platforms (Windows, Android, Linux) will be progressively added.

Prose will not take the path of a single Web app bundled in Electron, targeting all platforms at once. Web apps for the Desktop, while convenient for projects with limited means, do not feel that _that great_ for the end user. Laptop batteries drain faster and user experience is suboptimal. People deserve native apps, built with the system’s native GUI frameworks.

Once all the apps are out, we will be releasing a way for organizations to easily deploy their XMPP server on their premises (called a “pod”). Aside from that, we will also offer a cloud hosting service, as we know that running a server can be a no-go for most users.

To make this vision a reality, **I will assemble a remote team of developers & designers**. I will fund it all from my own pocket at the start, until a sustainable business model has been built. Note that all Prose apps will be open-source, therefore revenue would have to flow from cloud server hosting or other commercial services.

**If you are a talented developer or designer, interested in joining Prose, please [contact me](mailto:valerian@valeriansaliou.name)**. Wherever you are in the world, this is a remote team!

#### An unified messaging experience

<markdown-image src="/blog/introducing-prose/prose-macos-messaging.jpg" alt="SA screenshot of the prose app" caption="Share messages and files with your colleagues, with a best-in-class native messaging experience. Prose is designed for remote teams, split across different timezones."></markdown-image>

#### Call anyone from a single app

<markdown-image src="/blog/introducing-prose/prose-macos-call-pstn.jpg" alt="A screenshot of the prose app" caption="Start audio and video calls with your team members, or even call external phone numbers. Prose makes it easy to organize conference calls inside of outside of your workspace."></markdown-image>

#### Ubiquitous end-to-end encryption, made easy

<markdown-image src="/blog/introducing-prose/prose-macos-profile-omemo.jpg" alt="A screenshot of the prose app" caption="All messages sent and received are end-to-end encrypted. This means that even the server cannot read messages. Easily revoke a connected device access to all of your future encrypted messages."></markdown-image>


### On the business model of an open-source project

**Making money with an open-source business is incredibly hard**. A lot of open-source businesses fail, while others need to continuously raise VC funds in order to sustain their team.

Prose will be separating the user-facing apps — which will be open source — from the server-side, for which a cloud service will be offered. I am a big fan of the [Ghost Foundation](https://ghost.org/), that succeeded at making money as an open-source blogging software (their current revenue is tracked [on this page](https://ghost.org/about/)).

Ghost paved the way for profitable foundation-ran software project. Prose will follow suit. In order to protect the project on the long run, **Prose will be incorporated under a not-for-profit foundation**. This means that the Prose Foundation cannot be split into share and therefore it cannot be sold to private investors. Selling a project can affect the direction it takes and alter its founding values, which is why Prose needs to hedge itself against this risk.

## Closing Notes

With the centralization of workspace messaging towards two huge conglomerates, it is time to provide businesses with a first-class decentralized and open alternative.

Prose will offer a set of native open-source apps, from Desktop to Mobile, all built on solid foundations: the XMPP protocol.

**I am looking to assemble a world-class remote team of developers & designers, working towards this vision with me. If you are interested, please [drop me a line](mailto:valerian@valeriansaliou.name)**. I am looking for macOS & iOS developers (Swift/SwiftUI), as well as Windows and Android developers. Adding to that, UI designers and illustrators to design & maintain [Prose’s website](https://prose.org/) (`prose.org`), identity and app designs.

#### Share this post

[Twitter](https://twitter.com/intent/tweet?text=Announcing%20Prose%3A%20Decentralized%20Team%20Messaging%20in%20an%20Era%20of%20Centralized%20SaaS&url=https://journal.valeriansaliou.name/announcing-prose-decentralized-team-messaging/)


