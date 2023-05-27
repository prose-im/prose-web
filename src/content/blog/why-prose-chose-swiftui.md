---
title: "Going Native: Why Prose chose SwiftUI"
description: "Building a native macOS app in a world of cross-platform frameworks"
cover:
  src: "/blog/why-prose-chose-swiftui/swift-ui.webp"
  alt: "Swift UI logo"
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

Imagine you're a craftsman, building a beautiful piece of furniture. Would you rather use tools specifically designed for your craft, or make do with a Swiss Army knife that has a bit of everything but is master of none?

Building a native app for macOS is akin to crafting that beautiful piece of furniture with the right tools. It fits perfectly within the ecosystem, much like a handcrafted chair blends seamlessly with the interior design of a room. Cross-platform apps, on the other hand, are the Swiss Army knife – versatile, but often lacking in the _finesse_ that comes with specialisation.

The purpose of this article is not to suggest that cross-platform solutions are inherently bad. In fact, many apps we use on a daily basis like Discord, Figma, 1Password and Notion are all [Electron-based apps](https://www.electronjs.org/apps). With that said, let's explore the reasons behind our decision to natively develop Prose.

## User Experience over Developer Experience

Startups often avoid using native development because it's easier to write code once and have it run on all platforms. While that is a valid point, we believe that the end user's experience (UX) should always take priority over the developer's experience (DX). After all, what's the point of building messaging apps if no one interacts with them?

### Design that feels right

Going native doesn’t mean you have to sacrifice your branding and create a bland interface. Instead, it means your users are greeted with a familiar and intuitive interface. [Airbnb’s latest redesign](https://news.airbnb.com/2023-summer-release/) proves that you can build native apps without compromising on your design language. Since the first iPhone was released, we have been fans of how Apple creates fluid gestures that feel natural and responsive. Our priority is to ensure that Prose is reliable and robust, and that it does not require a manual to operate.

### Extended battery life

Ever found yourself in need of battery in the middle of an important call ? You reach awkwardly for the charger only to remember you left it in another room.

<markdown-image src="/blog/why-prose-chose-swiftui/google-eats-ram-meme.png" alt="Popular meme of Google Chrome devouring RAM" caption="Popular meme of Google Chrome devouring RAM"></markdown-image>

As a device ages, its battery capacity naturally decreases. This leads to more frequent charging. If you’re a macOS user, you can see which apps are using significant energy simply by clicking on the battery icon in the menu bar. Chances are, you’ll find the usual suspects like Google Chrome. The reason these apps are draining your battery is because they require a lot of RAM to run compared to native alternatives. It's like comparing a gas-guzzling truck with a fuel-efficient hybrid car. So in the same way you get more mileage with a hybrid, you’ll get more screen time using native apps.

### Instant startup times

We love it when apps launch quickly. With the Prose app, you simply click on the icon and the app is ready to go. In the case of Discord, assuming there are no updates, it takes about 8 seconds for the UI to render. This is one of the [many problems faced by the Airbnb](https://medium.com/airbnb-engineering/react-native-at-airbnb-the-technology-dafd0b43838) team that ultimately led to their switch to native. Although the incredibly talented engineering team at Discord has put in significant effort to enhance the performance of React Native (as stated in their blog post [How Discord Achieves Native iOS Performance with React Native](https://discord.com/blog/how-discord-achieves-native-ios-performance-with-react-native)), there will always be limitations to what can be achieved compared to a native app that is fast by default.

## Challenge accepted

When we chose [SwiftUI](https://developer.apple.com/xcode/swiftui/), we knew it would come with its own set of challenges. However, after reading about the experiences of other developers, we were shocked to learn that some of these issues are quite common.

### Platform specificity

Going native means that initially, Prose will only have a macOS app. However, there's a silver lining - we hope to leverage [Mac Catalyst](https://developer.apple.com/mac-catalyst/) to get a head start on our iOS app. Basically, Mac Catalyst allows for code sharing across different Apple platforms, enabling your app to run on multiple devices with minimal additional code. We are also developing a web version of Prose so that Windows and Linux users can use it while we build the remaining apps.

### Smaller community

The macOS developer community, while passionate and skilled, is significantly smaller than the web and Javascript developer communities. This means fewer libraries to lean on, fewer places to seek help, and fewer experiences to reference. Similar to [Remotion](https://remotion.com/blog/why-remotion-is-a-native-macos-app-not-electron), we were surprised to discover that no solutions existed for implementing a straightforward emoji picker.

### Less developer tooling

The relatively small number of macOS developers means that macOS-focused developer tools are less plentiful than those for iOS, let alone for web development.

### Hiring challenges

When it's time to scale up the team, finding skilled macOS developers can be a Herculean task. The talent pool is not only smaller but also less diverse. Fortunately, we have [Marc](https://twitter.com/nesium), a veteran developer in both macOS and iOS, on our team.

## The Bottom Line

While there are many advantages to choosing native development, it ultimately depends on the context. From our perspective, the user’s primary concern is not the tech stack, which is why we strive to provide the best experience possible. Additionally, it's worth noting that SwiftUI, while a powerful tool, is not without its drawbacks from a developer's perspective. As the team at Remotion put it so eloquently :

> “If you're willing and able to put in the work, macOS apps can reach a quality of experience that's simply not possible with cross-platform frameworks.”

They seem to think the extra work is worth it and we couldn’t agree more.

## Help us make Prose awesome!

We're working on building Prose and want to create a community with other macOS developers. We're excited to share our journey with you and would love to know what you'd like us to blog about. Tweet us [@prose_im](https://twitter.com/prose_im) and let us know!

There's so much potential for what we can achieve with macOS, and there are already some incredible apps out there that have set the bar high. If you're curious about Prose, kindly sign up to our waitlist and we’ll notify you as soon as its ready!
