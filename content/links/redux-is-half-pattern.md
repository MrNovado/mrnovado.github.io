---
title: Redux is half of a pattern
date: 2020-05-24
link: https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7
tags: [link, code, actor-model]
---

By David K. Piano. Detailed explanation of why and how effects are essential to state-management process.

```js
// state -> message -> newStateWithEffects
const reducer = ...
// ...
case 'FETCH':
  return {
    ...state,

    // finite state
    status: 'loading',

    // actions (effects) to execute
    actions: [
      { type: 'fetchUser', id: 42 }
    ]
  }
// ...

// pretend the state came from a Redux React hook
const { effects } = state;

useEffect(() => {
  effects.forEach(effect => {
    if (effect.type === 'fetchUser') {
      fetch(`/api/user/${effect.id}`)
        .then(res => res.json())
        .then(data => {
           dispatch({ type: 'RESOLVE', user: data });
        })
    }
    // ... etc. for other effect implementations
  });
}, [effects]);
```