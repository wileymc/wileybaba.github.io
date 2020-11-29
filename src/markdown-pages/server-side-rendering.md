---
slug: "/blog/server-side-rendering"
date: "2019-08-13"
title: "Is Server Side Rendering Back in Vogue?"
draft: false
---

**_A brief overview of the benefits and drawbacks of server side rendering._**

Not too long ago, when Ruby on Rails was the _de facto_ framework for building on the web, server side rendering (SSR) was the default. Web apps served HTML, CSS, and JavaScript files in response to HTTP calls to the server. Often, the server would dynamically create these files using Ruby (or some other programming language), and a connection to a database. Further more, because as programmers we value the separation of concerns, we subdivided our HTML into smaller components—"partials" in Rails. These pieces, along with content from our database, were assembled on the server and passed on to the browser for interaction by the end user. Interactions with our web apps were then passed back to the server by a range of HTTP verbs, which in turn handled computation and database modifications, and responded with updated content.

The above pattern is still widely in use across the web today. However, with the explosion in popularity of front-end frameworks, **more and more of our web content is being assembled within the browser itself by JavaScript code.** With this client-side-rendering pattern, the server initially serves a minimal HTML file, followed by waves of JavaScript code that fetch the necessary data and compose the remainder of our web pages content. JavaScript is no longer a language merely used for adding mild interactivity to web pages. JavaScript is **the** assembly language orchestrating and building much of the modern web. In fact, even [Web Assembly](https://webassembly.org/) must be loaded and compiled by the JavaScript engine in modern browsers.

Client-side-rendering has proliferated across the web, and for good reason. **_Assuming the end user has a performant device and a strong internet connection and the server and data center are modern_**, they will be delighted by an impressively fast and highly interactive experience that has become the expected behavior for modern web apps. While these assumptions are becoming increasingly realized, most of the world still interfaces with the web on low-to-mid-end mobile devices. It is therefore important that we design our modern web apps to provide decent user experiences to this majority.

Server-side-rendering has two important benefits:

1. **Performance**: SSR helps decrease "time to visible" of web pages. There are fewer roundtrips to the server involved, and when coupled with hot servers (cached content), users will see your content faster than with CSR. This is especially true when users are on low end mobile devices, because servers are typically much faster. Also, because HTML is a streaming protocol, it can be loaded as it arrives by the browser. This is in contrast to JavaScript, which requires entire files to be loaded before execution. Essential JS can be inlined for basic page interactivity initially.
2. **Search Engine Optimization:** If you've ever written (or tried to write) a web scraper/crawler for a client-side-rendered page, you understand. Although Google's crawlers are now capable or efficiently parsing and indexing content rendered by client-side JavaScript, not all search engines have the same abilities. Crawlers are better at reading HTML rendered by the server than handling all of the JS that pieces together many pages. Additionally, your content will be optimized for social media thumb-nailing, with linked pages (on Facebook, Twitter, etc.) displaying page title, description, and image.

Tom Dale, one of the creators of Ember.js, summed it up by writing,

> The performance of your server is much more predictable, and more easily upgraded, than the many, many different device configurations of your users. Server-rendering is important to ensure that users who are not on the latest-and-greatest can see your content immediately when they click a link.

Given these advantages, many web application developers are returning to the time tested practice of server-side-rendering. Yet this time around, the approach is often quite different to the glory days of simple model-view-controller based Rails applications. Nowadays, we can utilize **isomorphic JavaScript** to enjoy the user experience benefits of client-side-rendering in conjunction with the predictability and universal reach of server-side rendered content.

**Isomorphic JavaScript (or Universal JS)** is JavaScript that can run on both the client and the server. Many modern front-end frameworks utilize isomorphic code. React, which I am most familiar with, allows you to implement basic SSR fairly easily. Rather that using ReactDOM's render method, we will use the hydrate method to signal to the renderer that we are rehydrating our app after an initial server side render.

    // index.js

    ReactDOM.hydrate(<App />, document.getElementById('root'));

Image we have a Koa instance setup to serve our fully rendered content. Here, we will import our app component from the client directory and import the ReactDOMServer to use its

`renderToString` method for serving our app as a static HTML string.

    // server.js

    router.get('/*', (ctx, next) => {
      const app = ReactDOMServer.renderToString(<App />)

      const indexFile = path.resolve('./build/index.html')
      fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Bummer:', err)
          return ctx.status(500).send('Please try again.')
        }

        return ctx.send(
          data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        )
      })
    })

While this is a trivial example, it is illustrative of the basics of implementing SSR with React. Covering routing and data fetching with SSR in React will require a separate blog post. There are many tools and frameworks that help abstract away the complexities of SSR and maintain the benefits of CSR. With React, the go-to solution is [Next.js](https://nextjs.org/)

Before concluding, I will briefly touch on some of the challenges, both inherent and technical, that arise with SSR. Firstly, with isomorphic JavaScript, you have to be careful with recycling code that references the browser DOM for use on the server. You can use simple IF checks:

    if (typeof window !== "undefined") {
    	//run serverside code
    }

Furthermore, you can set up some ESLint rules that prevent you from calling on the DOM in server side code.

Inherently, with SSR, your pages time to interactive will not improve much compared to CSR. However, you should implement [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) and hydrate your page incrementally. Another solution is to use different root nodes for above the fold and below the fold content. In other words, split your frontend between priority content that is most important, and that which can wait to be loaded.

Dan Shappir, the Performance Tech Lead at Wix has an [excellent talk](https://www.youtube.com/watch?v=O1wBZviW7yI) on this topic and also went into more detail on [this podcast](https://devchat.tv/js-jabber/jsj-371-the-benefits-and-challenges-of-server-side-rendering-ssr-with-dan-shappir/).

In looking forward, I would argue that many of the benefits of server side rendering will ultimately be outweighed by the performance and user experience benefits of client side rending—especially as performant devices and high speed internet become more widely available. The future of the web is unclear, but one thing is for certain...technologies will continue to improve and adapt to changing socioeconomic conditions. Hopefully the technologies that gain wide adoption will foster the human in us, and provide for a prosperous and inclusive future.
