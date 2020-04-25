---
title: What we can learn from Minecraft in 2019 - part 1
date: "2019-03-12T15:37:39.038Z"
category: gamedesign
tags: [wtfcohesion]
description: Thousands of mods and the way they are glued together, impressive sandbox to see cohesion in action and understand it better.
---

I've started playing this game way back in 2009. Back then I've been blown away with how impactful and gratifying the game felt: you could truly place a mark upon a world - you could build and destroy anything anywhere you like with nothing stopping you what so ever!

This was truly remarkable and I believe it was the first game in 3D which introduced voxel-based design in a big way - an entire world Minecraft generates is built with [voxels](https://en.wikipedia.org/wiki/Voxel) - everything is in cubic(ish) form, stacked and connected in a certain cohesive way.

There were other games before Minecraft of course, most notable being [Dwarf Fortress](http://www.bay12games.com/dwarves/features.html), which experimented with or based their designs on _voxels_, but Minecraft became first accessible one (and hence popular?) and first visually stunning: disregarding visual aesthetics, seeing some of the Minecraft' generated (and especially hand-crafted) landscapes and vistas could be breathtaking!

![Modern shaded Minecraft landscape](./minecraft-shaded-landscape.jpg "It is especially cool with shaders!")

## Minecraft as a platform

Funnily enough, vanilla Minecraft wasn't really _a good game_ though. Strictly speaking, it wasn't (and still sort of isn't) even a game because it lacked game-defining features like an ability to fail, an ending, or any context of what you are doing, why you are doing it, and what your final goal is.

There was no goal, there was no context and you couldn't fail anything. It was just a sandbox for you to build castles in. More like a really impressive tool for world building with some gamish experiences thrown in for a good measure. Which wasn't engaging enough for me personally and after a few months I stopped playing and completely forgot about Minecraft until recently...

> I am not trying to say Minecraft is bad or anything, I'm just saying Minecraft as a game isn't actually what's most impressive about it.

What **IS** impressive about Minecraft is the **modding community** - its ecosystem - it has built after so many years. Look at [Bukkit](https://dev.bukkit.org/bukkit-plugins), look at [Forge](https://www.curseforge.com/minecraft), look at this enormous collection of plugins, mods, resource packs, data packs and entire [game-worlds](http://www.minecraftmaps.com/) (adventure, puzzle, rpg, gamish, and survival)!

There are literally **thousands** of mods available! And not only that, but there is this idea of mod packs which is the first time I see successfully implemented in a game-project. Having mod-support is nothing new, plenty of projects done that already, but creating/supporting a modding platform in such a way that gluing any of these mods together in a cohesive way **is easy**(ish) - is an astounding accomplishment and is something an engineer interested in cohesive system design should look at very closely.

> The idea and implementation of mod packs are what shines a new light on a problem of cohesion in system design.

## Tough times

Cohesion is hard. It is hard to understand what it is and how exactly it applies to a certain type of system. It is very hard to implement in a reliable way. And it is even harder to continuously support throughout an entire lifespan of your project. It is freakishly impossible to teach.

When you first learn about cohesion be it on a programming/engineering ([CS](https://en.wikipedia.org/wiki/Computer_science)) courses or all by yourself you will probably be given (or will find) this sort of explanation: [cohesion](<https://en.wikipedia.org/wiki/Cohesion_(computer_science)>) - is the degree to which the elements inside a module (or a function, or a class, an object, component, etc.) _belong together_. Cohesion is usually described as high or low and is often associated and contrasted with [coupling](<https://en.wikipedia.org/wiki/Coupling_(computer_programming)>), which is the degree of _interdependence between modules_.

High cohesion is always preferable and is related to higher understandability, reliability, and reusability of your module. High (tight) coupling, on the other hand, is something that you would want to avoid because that would mean your modules are so interconnected and interdependent it is very hard to distinguish between them, hard to understand what is going on with them, hard to reuse.

Tight coupling would often mean low cohesion and vise versa, but... not necessarily.

Later down the road you would probably learn about related concepts such as [SOLID](https://en.wikipedia.org/wiki/SOLID) in OOP, [KISS](https://en.wikipedia.org/wiki/KISS_principle) in generic system design, [component-based architecture](https://en.wikipedia.org/wiki/Component-based_software_engineering) in software engineering and so on and so on, - you will learn about many other design principles, methods, and techniques which are all trying to solve - amongst other things - this exact problem of cohesion (and coupling).

> Okay, but like what does this all mean in practice though? Isn't it sounds more like an academic gibberish? What are the real world applications? And what Minecraft mods have to do with any of this?

In CS they have always been telling us to design and produce system-components in isolation so they are highly cohesive and completely decoupled at the same time, like _a Lego block_ - small, simple, understandable and reusable. But in practice there are _SO_ many particular approaches to this, it is extremely easy, given a task to design a decoupled system, to overthink everything, lose a bunch of time, and get stuck with [analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis).

If you've been dealing with OOP for quite some time now you are not new to accidental abstractions like a **\*Manager** for instance. When your typical, say JAVA, application grows little by little, those pesky _helpers/utility-class_ guys pop up here and there. And you are okay with this at first, but then someone forgets what those are all about and puts a bunch of methods somewhere they do not exactly belong. And then you review the code and like... wow, but where _DO_ they belong now? You realize you don't understand the abstraction boundaries anymore, that your trusty **HelperManager** is loaded with only-god-knows-what and worse of all it exhibits functionality of other helpers and managers, - and not only internal ones, oh no, - it also has some stuff your external libraries are for.

> Your different components use different helpers for basically the same functionality but with sorta different results... Total mess.

This anecdote is not limited to utilities, of course, the situation may arise with any loose abstraction or any growing component at all. When your system grows, when your component grows, their nature changes and they may lose cohesion, and in turn, you and your team will lose understanding of what the heck is going on with your project. This is one of the growing pains of any system and it is very important to recognize how it happens, why, and how to deal with it.

And Minecraft platform is the perfect place to actually see this all in action by looking at and experimenting with mod packs!

## What's next?

In the next part of this article, we will closer explore cohesion by learning how Minecraft mods can be glued together and how adding/removing mods from a pack affects its overall cohesion.