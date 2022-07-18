# Bigbro

A complete event library

![license](https://img.shields.io/github/license/NabilKharrich/bigbro)
![npm](https://img.shields.io/npm/v/@nabilk/bigbro)

## Table of contents

### Functions

- [on](README.md#on)
- [off](README.md#off)
- [emit](README.md#emit)
- [emitAsync](README.md#emitasync)
- [remove](README.md#remove)
- [inspect](README.md#inspect)

## Functions

### on

▸ **on**(`events`, `domOrCb`, `listener?`, `options?`): `void`

Add one or more event listeners or register a callback to one or more events

#### Parameters

| Name        | Type                                | Description                     |
| :---------- | :---------------------------------- | :------------------------------ |
| `events`    | `string`                            | the name of one or more events  |
| `domOrCb`   | `Function` \| `Window` \| `Element` | the dom element or bus callback |
| `listener?` | `EventListener`                     | the dom event listener          |
| `options?`  | `EventListenerOptions`              | the dom event options           |

#### Returns

`void`

---

### off

▸ **off**(`events`, `domOrCb`, `listener?`): `void`

Remove one or more event listeners or detatches a callback from on or more events

#### Parameters

| Name        | Type                                | Description                     |
| :---------- | :---------------------------------- | :------------------------------ |
| `events`    | `string`                            | the name of one or more events  |
| `domOrCb`   | `Function` \| `Window` \| `Element` | the dom element or bus callback |
| `listener?` | `EventListener`                     | the dom event listener          |

#### Returns

`void`

---

### emit

▸ **emit**<`Targs`\>(`event`, ...`args`): `void`

Emit the desired event

#### Type parameters

| Name    | Type            |
| :------ | :-------------- |
| `Targs` | extends `any`[] |

#### Parameters

| Name      | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `event`   | `string` | the name of the event                              |
| `...args` | `Targs`  | the arguments that will be passed to the callbacks |

#### Returns

`void`

---

### emitAsync

▸ **emitAsync**<`P`, `Targs`\>(`event`, ...`args`): `Promise`<`Awaited`<`P`\>[]\>

Emit the desired event asynchronously

#### Type parameters

| Name    | Type            |
| :------ | :-------------- |
| `P`     | extends `any`[] |
| `Targs` | extends `any`[] |

#### Parameters

| Name      | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `event`   | `string` | the name of the event                              |
| `...args` | `Targs`  | the arguments that will be passed to the callbacks |

#### Returns

`Promise`<`Awaited`<`P`\>[]\>

the promise

---

### remove

▸ **remove**(`events`): `void`

Remove one or more events from the stack

#### Parameters

| Name     | Type     | Description                    |
| :------- | :------- | :----------------------------- |
| `events` | `string` | the name of one or more events |

#### Returns

`void`

---

### inspect

▸ **inspect**(): `Map`<`string`, `Set`<`any`\>\>

Generate a clone of the bus stack, usefull for debug

#### Returns

`Map`<`string`, `Set`<`any`\>\>

a clone of the bus stack
