---
date: 2020-26-04
tags: ['project', 'actor-model', 'xstate', 'code']
---

# [xstate-gentype-proof](https://github.com/MrNovado/xstate-gentype-proof)

A proof of concept that rich (type-sound'ish) xstate-schemas could and should be generated from a simpler (even non-typed) source.

```typescript
export const schema = { ... };

export const createMachine =
(options: {actions, services, activities, guards, ...}) =>
    Machine(schema, options);

type Paths = "a" | "a.ab" | "a.ac" | "a.ad" | "b" | "b.bc" | ...;

const eventList = [...];
const state2EventMap = {...};

export const matches = (state, path: Paths) => state.matches(path);
```

[Implemented](https://github.com/MrNovado/xstate-gentype-proof/blob/master/gentype/simple.gentype.js#L40) using promises (service-actors).


```json
{
    context: { schemaJson: null, moduleParts: [] },
    initial: "parsingSchema",
    states: {
        parsingSchema: {
            invoke: {
                src: "parseSchemaFile",
                onDone: {
                    target: "generatingMachineModule",
                    actions: "saveSchema",
                },
                onError: { target: "#finallizing", actions: "logError" },
            },
        },
        generatingMachineModule: {
            context: {
                paths: [],
                state2Event: null,
                events: [],
                options: null,
            },
            initial: "generatingStateCombinations",
            states: {
                generatingStateCombinations: {
                    invoke: {
                        src: "generateStateCombinations",
                        onDone: {
                            target: "generatingState2EventMap",
                            actions: "saveCombos",
                        },
                        onError: {
                            target: "#finallizing",
                            actions: "logError",
                        },
                    },
                },
                generatingState2EventMap: {
                    invoke: {
                        src: "generateEventTools",
                        onDone: {
                            target: "generatingMachineOptions",
                            actions: "saveEvents",
                        },
                        onError: {
                            target: "#finallizing",
                            actions: "logError",
                        },
                    },
                },
                generatingMachineOptions: {
                    invoke: {
                        src: "generateMachineOptions",
                        onDone: {
                            target: "generatingModuleParts",
                            actions: "saveOptions",
                        },
                        onError: {
                            target: "#finallizing",
                            actions: "logError",
                        },
                    },
                },
                generatingModuleParts: {
                    invoke: {
                        src: "generateMachineModule",
                        onDone: {
                            target: "#writingMachineModule",
                            actions: "saveModule",
                        },
                        onError: {
                            target: "#finallizing",
                            actions: "logError",
                        },
                    },
                },
            },
        },
        writingMachineModule: {
            id: "writingMachineModule",
            invoke: {
                src: "writeMachineModule",
                onDone: "#finallizing",
                onError: { target: "#finallizing", actions: "logError" },
            },
        },
        finallizing: { id: "finallizing", type: "final" },
    },
}
```