---
title: Algebraic data
date: "2019-03-28T11:41:22.269Z"
category: programming
tags: [code]
description: Type variant and the road to happiness; algebraic data to the rescue.
---

I've been trying to finish this article for a few weeks now, but just couldn't get it done. The major thing that I've been trying to sell here is the idea that OOP (and class inheritance specifically) is a wonky way of coding, in that it _forces_ you (more like enables you, really) to design rigid taxonomies which are hard to change, scale poorly, hide behaviors and states, making them implicit.

- OOP design bullies you into mentality to **get it right the first time** (or else), which is stressful and may induce [analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis).

- **Is-a** relationships are **the most strong ones** and are **commitments**, which, potentially, extremely hard to break.

- There is a common saying that you **should only inherit once** and **prefer composition over inheritance**.

I'm not saying inheritance is unusable, but you might consider other tools.

So, instead of trying to provide a deep, simple and compelling example of why [OOP is Bad](https://youtu.be/QM1iUe6IofM) (which it still kinda isn't, but whatever), I'll just show you how cool the algebraic data (or [variant](https://reasonml.github.io/docs/en/variant)) type is and hope you would like it too.

---

So, remember how a class in OOP is always a container of data and behaviors? And how the only way to create class taxonomies is to use inheritance, which might stiffen you up a bit, because it makes little sense for your **AnimalIcon** class to inherit data and behaviors from the **Animal** class?

Well, with the type variant you can go like this:

```elm
type Animal
    = Moo MooState
    | Bark BarkState
    | Meow MeowState
    | AnimalIcon AnimalURI AnimalState
    | UnknownAnimal
    | ...
```

You can create any taxonomies you want with any classes (types in this particular case) without restricting and committing to anything at all.

The fact that the **Moo** type is in the same category with the **AnimalIcon** doesn't break anything for either of them. But now, you can potentially reason about an **AnimalIcon** in _the same(ish) context_ you could about any other animal.

```elm
case animal of
    Moo mooState ->
        -- doing something with the moo
        changeMooState mooState

    AnimalIcon animalUri animalState ->
        -- doing something with the icon
        changeAnimalIcon animalUri animalState

    UnknownAnimal ->
        -- doing something with the unknown
        throwATantrum

    _ ->
        -- not doing anything
        animal
```

Which is super powerful! Not only that, but you can use type variant to create taxonomies of events as well:

```elm
type AnimalMsg
    = AnimalInDanger DangerLevel
    | AnimalIsHurt Damage
    | AnimalEats Nutrition
    | AnimalPoops
    | AnimalRuns Speed
    | AnimalClicked
    | ...
```

And reason about them too:

```elm
update msg animal =
    case msg of
        AnimalEats nutrition ->
            case animal of
                Moo mooState ->
                    makeMooFatBy nutrition mooState

                AnimalIcon animalUri animalState ->
                    scaleIconBy nutrition animalUri animalState

                _ -> ...

        AnimalPoops ->
            case animal of
                Moo mooState ->
                    makeMooThin mooState

                AnimalIcon animalUri animalState ->
                    playPoopEffect animalUri animalState

                _ -> ...

        AnimalClicked ->
            case animal of
                AnimalIcon animalUri _ ->
                    -- open uri only with Icon
                    openUri animalUri

                _ ->
                    -- do nothing with the others
                    ...

        _ -> ...
```

How cool is that? These example are sort of in pseudo-code, but if you want something more applicable, you should check **Richard Feldman**'s [Elm SPA](https://github.com/rtfeldman/elm-spa-example) example. Start with the [main](https://github.com/rtfeldman/elm-spa-example/blob/master/src/Main.elm) module.

Now, algebraic data or type variant are featured mostly in full-on functional languages, like [Haskell](https://www.haskell.org/) or [Elm](https://elm-lang.org/). But nowadays you can also find them in hybrid languages as well, like [Typescript](https://www.typescriptlang.org/docs/handbook/advanced-types.html), [ReasonML](https://reasonml.github.io/docs/en/variant), [Reason-React](https://reasonml.github.io/reason-react/docs/en/state-actions-reducer).

Typescript or Reason enable you to use variant with React:

```reason
type action =
  | Click
  | Toggle;

let component = ReasonReact.reducerComponent("Example");

let make = (~greeting, _children) => {
  ...component,
  initialState: () => {count: 0, show: true},

  reducer: (action, state) =>
    switch (action) {
    | Click => ReasonReact.Update({...state, count: state.count + 1})
    | Toggle => ReasonReact.Update({...state, show: !state.show})
    },

  render: self => {
    <div>
      <button onClick=(_event => self.send(Click))/>
      <button onClick=(_event => self.send(Toggle))/>
      ...
    </div>;
  },
};
```