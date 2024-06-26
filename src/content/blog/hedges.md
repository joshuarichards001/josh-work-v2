---
title: "Hedges: A Startup Retrospective"
description: "Learn about my journey working with a co-founder to build an ambitious personal finance platform."
date: 2023-06-14
---

During my final year at university, I was diving deeper into investing and the online community surrounding it. It was a time when people had assets in all sorts of different places: stocks, ETFs, crypto, property, and more. I was dabbling in a few of these assets and found it annoying to switch between the different investment platforms to see how my portfolio was performing. After doing some research, I found the only places to solve this problem in New Zealand were [Sharesight](https://www.sharesight.com/) (which started at $20/month) and [Yahoo Finance](https://nz.finance.yahoo.com/portfolios/) (which had a clunky and confusing user interface). After seeing this, I decided to start working on a solution.

## Ticker Tracker

Ticker Tracker was the solution I had been looking for. A platform where you could view all of your assets together to see a snapshot of how they were performing. I shared the platform with several subreddits ([PersonalFinanceNZ](https://www.reddit.com/r/PersonalFinanceNZ/comments/nfys7y/tracking_your_whole_portfolio_made_easier/), [fiaustralia](https://www.reddit.com/r/fiaustralia/comments/njoox7/tracking_your_whole_portfolio_made_easier/), [ausstocks](https://www.reddit.com/r/ausstocks/comments/njopbp/tracking_your_whole_portfolio_made_easier/)) and received really positive feedback! I resolved a bunch of feature requests and bugs from the comments as they came up.

![img](./images/hedges/tickertracker.png)

Several people got in touch with me expressing support for or interest in Ticker Tracker.

- [Hatch Invest](https://www.hatchinvest.nz/) reached out in a [comment](https://www.reddit.com/r/PersonalFinanceNZ/comments/nfys7y/comment/gz7fhts/?utm_source=share&utm_medium=web2x&context=3) stating the project was shared around the office and the team thought it was 'very cool'.
- The Managing Director of a leading financial news website reached out for a potential collaboration.
- A number of software engineers reached out, offering their assistance in developing the platform.

I onboarded over 600 new users that week and garnered more than 10,000 page views. The feedback was exciting and really showcased the demand for a product like this.

One of the individuals who reached out took their proposal seriously. They outlined a vision for the project, how they could assist in realising that vision, and their qualifications. They were an experienced designer with several successful entrepreneurial ventures. After the cofounder agreement was signed, we jumped into the development of **Hedges**

## Hedges

Development began smoothly and I was making quick progress on the core platform. We held weekly catchups to discuss progress, and assigned responsibilities based on our skill sets.

The division of work boiled down to me handling software development while my partner took charge of everything else.

Hedges was a complex full-stack platform built using React Native, NodeJS, PostgreSQL, and Heroku.

![img](./images/hedges/hedges.png)

Within about six months we had something functional that looked great but had a few bugs left to iron out. However, before getting the MVP in front of users we dropped the project. What happened?

## Why it Didn't Work

As always, it was a multi-faceted problem with several contributing factors. A few of those issues stood out and are worth mentioning.

### Scope Creep

One of the primary reasons for the project's downfall was scope creep. As you may have noticed earlier in the post, we had been working on this platform for six months without releasing anything to users. The scope of the MVP was just too big!

The initial plan was to build a fully functional portfolio tracker with shares, ETFs, crypto, property, cash, and custom assets. shares, ETFs and crypto would all have live price, historical, and fundamental data. All of these assets would be accounted for in a graph that showcased the historical value of your portfolio. There would also be multiple portfolios with custom ordering and sorting. The complexity was insane.

Bugs were coming up left and right, and development really slowed towards the tail end of the project.

**What we should have done**: Kept the scope small (e.g. just stocks and ETFs), got it in front of users, and iterated from there.

### Perceived Inequity in Workload

As I outlined in the scope creep section, the project got very complicated and time-consuming. Once the design work was done and the business plan was laid out it didn't seem like there was much work for my business partner to do. This led to the weekly meeting consisting of me talking about the work I was doing and my partner talking about areas of the app that needed improvement.

The equity was 50/50 but I felt like our contributions weren't matching that.

**What we should have done**: Got users involved earlier which would create more non-technical work.

### Financial Data Headaches

All of the data that was required for the platform was going to cost hundreds of thousands of dollars a year. The licencing for NZX/ASX stock and ETF data was going to be over $100k alone. On top of this, we would require another broker to actually get the data, costing tens of thousands more.

I can now see why the only players are ShareSight and Yahoo. The barrier to entry is too high.

**What we should have done**: The only way we could have solved this problem was to take the project extremely seriously and go for venture funding. No Indie Hacking allowed on this one.

### Life Got Busy

I started my graduate position at Xero and he had his second child. Our priorities moved away from being the next big startup founders and onto other things. We both deprioritised the project and with that, it faded away into the background.

**What we should have done**: Not much you can do. It just wasn't the right time for either of us.

## Conclusion

Working on Ticker Tracker and then Hedges was some of the most fun I've had. I learned so much about solving a problem with code, getting feedback, working with a business partner, and so much more. It gave me an invaluable foundation for future opportunities and opened my eyes to the world of entrepreneurship. Who knows what's in store next!
