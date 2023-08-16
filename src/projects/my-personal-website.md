---
title: My personal website
date: 2023-08-16
---

I recently migrated this website from [Heroku](https://www.heroku.com) to [Netlify](https://www.netlify.com) and refactored it from [jbake](https://jbake.org) to [NextJs](https://nextjs.org).

It was a nice opportunity to learn the new *App Router* system of NextJs and to explore content management using markdown files to create the *Projects* section of the website. I will later move other sections to markdown as planned.

I'm writing this page and testing [Contentlayer](https://www.contentlayer.dev/), the tool that converts markdown files to HTML.
When converting markdown files, it creates type-safe JSON data that contains metadata fields (like title and date) and HTML ready to use with the *dangerouslySetInnerHTML* property.
It's really easy to setup the tool, the project is well documented and has support for NextJs. I love it provides live reload 😎

I built this new version using [Tailwind CSS](https://tailwindcss.com) (it was on my *to-learn* list), which is similar to [Bootstrap](https://getbootstrap.com/) in its basic usage but seems to be easy to customize classes inline. Also, it provides the plugin `@tailwindcss/typography` that helps you to format this exact text, since Tailwind CSS removes default values from headings and links (among other HTML elements).

I almost forgot to mention that I used [Imgix](https://imgix.com) as my image optimization proxy to reduce the size and loading time of the website.
It was not the first time I used it, and for now this is not a photo gallery website, but it definitely makes a difference, even if you use a few images.