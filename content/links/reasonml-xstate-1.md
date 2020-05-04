---
title: Modelling domain with state machines in ReasonML
date: 2020-05-04
link: https://dev.to/margaretkrutikova/modelling-domain-with-state-machines-in-reasonml-n29
tags: [link, code, actor-model]
---

```reason
let transition = (input, state) =>
  switch (state, input) {
  | (NotStarted, Start) => Running(0.0)
  | (Running(elapsed), Pause) => Paused(elapsed)
  | (Running(elapsed), Finish) => Done(elapsed)
  | (Paused(elapsed), Resume) => Running(elapsed)
  | (Paused(elapsed), Finish) => Done(elapsed)
  | (Running(elapsed), Tick(tick)) => Running(elapsed +. tick)
  | _ => state
  };
```