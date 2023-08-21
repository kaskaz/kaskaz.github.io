---
title: The Original vs Cover
date: 2023-08-21
---

When I joined *Volkswagen Digital Solutions*, the first challenge was to learn Kotlin and to understand the project structure.
Some teams, including my team, were using the [*Hexagonal Architecture*](https://alistair.cockburn.us/hexagonal-architecture/) pattern in Spring Boot applications.

That was new and weird to me, but considering the complexity of the whole organization (with different projects and teams) it made sense that the engineering department should take good care of its code base by making it readable and structured. For me, **structure** is one of the key points of *Hexagonal Architecture*, because it helps me to think about the *Domain* of the problem I'm trying to solve, the *Use Cases* and how they can be executed (the *Ports*). In an organization where your team is required to build a piece of software that will be used by other services, you might need to make it accessible by REST or Messaging (the *Adapters*) and execute the same reusable *Use Cases*.

So to understand better this new structure, I decided to start a small project to practice.
Because this project required some "ignition" to execute its *Use Cases*, I chose the Twitter API to do the job.

After explore it, I came with the idea of creating ***The Original vs Cover***, a [Twitter profile](https://twitter.com/originalvscover) where users can vote in polls to elect the best version of a song, the original or the cover, and the results being shown on the [website](https://www.theoriginalcover.com).

The first use case was to get votes, by polling the profile's timeline, deciding whether they say *"I vote original"* or *"I vote cover"*, and store them. The second use case, that was more a reaction to the first one, was to send a like to the vote, meaning that it was approved and counted. It could happen that users were just commenting and not voting.

I was happy with the result and for just 5 polls in a short period of time, I had some engagement from the Twitter community. Although I had a roadmap for the project, I lost interest to keep building it.

In short, the stack was:

* Micronaut and Kotlin as backend
* Firebase as database
* Vue.js as the first version of the website
* ReactJS and Material UI as the current version of the website
* Heroku to host both backend and frontend (old version)
* Netlify to host the current version of the website

The backend service is down because Heroku stopped to offer the free tier, so it's not counting votes anymore. I could deploy it to [Render](https://render.com/), but due to the new Twitter API restrictions, the calls are denied.

I'm really thinking about moving this idea to Instagram and Facebook, it might get more traction there and the Meta API is free.

The frontend code is available [here](https://github.com/kaskaz/toc-web) and the backend code is available [here](https://github.com/kaskaz/toc-server).

Specially the backend code, that was my sandbox to play around with *Hexagonal Architecture*, I don't think it's in a good shape:

* Some interfaces (contracts) are placed in the *Adapters* zone, which should be dedicated to implementation code
* Nowdays in the *Application* zone I clearly differenciate *Use Cases* from *Services*
* The *Domain* zone should contain contracts (the *Ports*) and all the core models

The biggest challenge I found when working with *Hexagonal Architecture* was to move from the theoric hexagon pictures we see in the books and translate it to code and organize it correctly in a clean project structure.
