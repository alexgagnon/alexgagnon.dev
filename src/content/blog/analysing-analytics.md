---
title: "Analysing Analytics"
description: "Lorem ipsum dolor sit amet"
tags: ["lorem", "ipsum"]
created: "2021-01-01"
modified: "2021-01-01"
---

# Analysing Analytics

<p class="subheader"></p>

## Introduction

I recently went on a deep dive to find out what exists in the current landscape for website analytics. What's popular, what gives me the features I need, and what provides the best user experience for my visitors. I thought it would be a simple "technical" analysis of website performance versus how much actionable intel I get out of it, but it took me places I wasn't expecting like reviewing data privacy laws around the world. I'm still not sure I've found the best solution. But I did find some interesting things along the way that I'd like to share.

<FUIAlert variant="warning">I am not an expert in data privacy. This is not legal advice. If you're concerned about your legal obligations, please consult a lawyer.</FUIAlert>

## What is Analytics

As a website developer, we're concerned with having the best possible product from a technical perspective. We do that by having built in such a way that the site loads lightning quick and is engaging, inclusive, and secure. But that doesn't mean that we've designed the website in the way that best serves our users. That's where analytics can help. 

Analytics are a way to see how users interact with your website. They can tell you how many people are visiting your site, where they're from, what pages they're visiting, how long they're staying, and even what device they're using. You can even go deeper and get insights on user frustrations (where they click a button multiple times as it's not working or loading quickly enough), flows (the paths a user takes through a site), heat maps (visualizations of where on a page users have the most interactions), and session replays (being able to "watch" a user interact with your site). This information can be used to make informed decisions about how to improve your website.

## The Problem(s)

Anytime you're adding new features to a website, there are two big issues related to useability you have to consider. The first is that we want to keep the page clean so that users can get to the content they want as easily as possible without distraction or disruption. The second is that any extra bloat on a page is bad for performance, which is bad for both a user's experience and for SEO.

But beyond choosing an analytics solution based on our own requirements such as having a low impact on page performance, collecting the right metrics for meaningful and actionable insights, having an easy-to-use and polished UI, and overall being a good ROI, there are a couple of end user centric things we need to keep in mind:

- What data are we collecting? Is it necessary for the site to function or will it be used for other purposes (e.g. improving useability, marketing, or advertising)?
- How do we store the data on the client? Is it a cookie, localStorage, or sessionStorage?
- Does the way we track a user potentially fingerprint them or reveal personally identifiable information (PII)?
- Is it legal to collect the data?
- If consent is required for it to be legal, can it be done implicitely (i.e. buried in a site's privacy policy and simply using the site is giving consent), or does it need to be explicit (i.e. a user must opt-in)?
- How does explicit consent change the user experience?
- Who "owns" the data once collected?
- How does where the data is stored impact the user's privacy?

Let's look through these one at a time.

### What data are we collecting?


People generally don't like you snooping on them. **I** don't like being snooped on. In fact, data privacy is a huge concern for many people, some of whom will straight up abandon your site if it requires any kind of tracking. So how do we get the information we need without invading our users privacy? How do we do it in a way that is morally acceptable to everyone involved and meets the legal requirements of the jurisdiction they're in?

And there are **very real** legal implications. Data privacy laws are evolving quickly and becoming more and more strict every year. The EU's GDPR is the most well known, but there are many others such as PIPEDA in Canada, CCPR in California, and LGPD in Brazil. These laws apply to companies within these jurisdictions, but also to any company that target users within them. 

For example, if you're a US company that has a website that is "targeting" EU citizens, you're subject to GDPR. And the fines for non-compliance are no joke. They can be up to 4% of your annual revenue or €20 million, whichever is greater. And that's just for GDPR, you might also be subject to fines from other jurisdictions as well depending on where your users are located.

<FUIAlert variant="info">I haven't found a strict definition on what "target" means in practice, for example whether a general reference blog site like this one "targets" any particular geography, but one definite application is the sale of products or services. My take on all of this is that it's better to be safe than sorry. If you do know a reference, please let me know so I can update this post!</FUIAlert>

Then there's the issues of data residency and countries' cyber security mandates. Many countries have intelligence agencies that monitor internet traffic for various reasons, including domestic security and foreign threats. This is known as Signals Intelligence (SIGINT). There are many of these agencies around the the world, for example the NSA in the US and CSE in Canada. Both of these have the legal jurisdiction to intercept foreign data for analysis ([CSE](https://www.cse-cst.gc.ca/en/accountability/privacy), [NSA LINK NEEDED]()). They are not allowed to monitor their own citizens traffic, but they **can and do** monitor everyone elses. Other countries don't even have this distinction and actively gather information within their own borders as well. This has global implications for a few reasons:

1. Many SaaS providers may only use datacenters located in one or a few countries. Companies may also choose to or be forced to hand over any information they may manage to authorities at any time. For example, if you're a Canadian company using a US based service, your data may be inspected by the NSA and/or requested by their government for legal reasons.

2. The routing structure of the internet may inadvertently send traffic into a foreign country, opening it up to SIGINT. This is actually quite common, for example [much of Canada's internet traffic is routed through the US](https://openmedia.org/ixmaps-frequently-asked-questions). 

So even if a service uses encryption during transfer and at rest, be aware that without your knowledge you could be put in a position where other actors can gain access to your data. 



So we're looking for a solution that tracks the data we need to improve our site while being privacy friendly and having minimal impact on performance and useability. Let's see what's out there.

## Terms

Before we get into the nitty gritty, let's go over some terms that you'll see throughout this article.

<dl>
  <dt>Storage</dt>
  <dd>Cookie. A cookie is a small piece of data that A first party cookie is a cookie that is set by the website you're visiting. It's the most common type of cookie and is used for things like remembering your login details or what's in your shopping cart. They're generally considered safe as they can only be accessed by the website that set them.</dd>
  <dd>LocalStorage</dd>
  <dd>SessionStorage</dd>

  <dt>Data Privacy</dt>
  <dd>

  <dt>Data Residency</dt>
  <dd></dd>

  <dt>Data Agreements</dt>
  <dd></dd>

  <dt>Signals Intelligence (SIGINT)</dt>
  <dd></dd>

  <dt>Tag</dt>
  <dd></dd>

  <dt>Tracking</dt>
  <dd></dd>

  <dt>Real User Monitoring (RUM)</dt>
  <dd></dd>
</dl>

## The Options

I scoured the internet for some leading solutions. My requirements were that it had be to reasonably popular, collect common metrics, and have low impact on the performance of my website. Extra points were given if it was privacy friendly, low cost, and/or included other RUM analysis tools like heat maps and session replays.

- Google Analytics
- Matomo
- Clicky
- SimpleAnalytics
- Mixpanel
- LogRocket
- Adobe Analytics
- Amplitude
- Heap

## Tests

I ran a series of tests on each of the solutions to see how they performed:

- Page load time
- Page size
- Number of requests
- Number of cookies

I tested the overall performance using [WebPageTest](https://www.webpagetest.org/), PageSpeed Insights, Pingdom, and GTMetrix.

I tested the number of cookies using [CookieBot](https://www.cookiebot.com/en/cookie-scanner/).