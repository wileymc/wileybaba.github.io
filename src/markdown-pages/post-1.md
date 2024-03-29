---
slug: "/notes/javascript-frameworks"
date: "2018-02-28"
title: "Choosing a JavaScript Framework"
draft: false
---

When I first dove deep into the world of front end web development, I was astonished at the immense amount of open-source frameworks and tool sets that were at my disposal. How was I to choose between learning Angular, Vue, or React? What about Ember or Backbone or any of the other lesser known Javascript frameworks? I decided to take a pragmatic approach and learn everything I could about vanilla JavaScript before building out anything beyond a "Hello World" with the hot new new.

By building out a front-end without any libraries (and because I had built the backend myself), I was able to gain a deeper understanding of how user interfaces actually interact with server side code. Most importantly, I was able to really learn about modern HTML, CSS, and Javascript. I was free from the confusion of JSX, unconcerned with prop transformations, and unbothered by odd conditional syntaxes. I learned about data binding, how to use the fetch API, and how to access and mutate specific data from my database. Ignorant to the concept of state, I chained If checks to create workable navigation components and barely functional forms. Those were the good ol' days...before I learned how to use Vue and React.

While I'm glad I learned how to build UIs without a framework, it is unlikely that I will ever do it again for anything beyond a simple webpage. Professionally speaking, nearly all modern software shops rely on third party libraries to build applications. Furthermore, these frameworks are incredibly valuable and in using them, front-end development can be a real joy. I'd like to provide my insight on two of the most popular JavaScript frameworks, React and Vue.

I've been working with React lately, and because it has a greater market share and more job opportunities, I'll begin there. React is the brainchild of Facebook, and as such, it is tailored to fit a set of needs that are unique to massive enterprise applications. I'm not the biggest fan of React. Writing JSX can be awkward and sacrifices the native features available to modern HTML and CSS---The conditional syntax is not intuitive, and render functions in components can get unweildy and difficult to read in a hurry. As much as I love JavaScript, using it for EVERYTHING is not ideal.

I love Vue. First off, it is a community driven open source project not influenced by the needs of Facebook. I love the separation of template, JavaScript, and CSS within a single component file. It just makes sense. Vue's documentation is also excellent and makes it easy to get started.

_UPDATE 04/21/2019_

I am back to using React, and with the advent of hooks, I'm completely sold on a purely functional model of component design. Hooking into state from a functional component is brilliant. I no longer need to write class based components or deal with various component life-cycle methods. Throw styled-components into the mix, and developing a highly interactive UI that is attractive and functional is now a joy!
