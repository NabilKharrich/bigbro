# Bigbro

A complete event library

![license](https://img.shields.io/github/license/NabilKharrich/bigbro)
![npm](https://img.shields.io/npm/v/@nab/bigbro)

## Constants

<dl>
<dt><a href="#on">on</a></dt>
<dd><p>Adds a new bus event callback or event listener</p>
</dd>
<dt><a href="#off">off</a></dt>
<dd><p>Removes a bus event callback or event listener</p>
</dd>
<dt><a href="#once">once</a></dt>
<dd><p>Adds the event and removes it after the first occurrence</p>
</dd>
<dt><a href="#emit">emit</a></dt>
<dd><p>Emits the given event</p>
</dd>
<dt><a href="#emitAsync">emitAsync</a></dt>
<dd><p>Emits the given event asyncronously</p>
</dd>
<dt><a href="#inspect">inspect</a> ⇒</dt>
<dd><p>Returns a clone of the events stack. Usefull for debugging</p>
</dd>
</dl>

<a name="on"></a>

## on

Adds a new bus event callback or event listener

| Param  | Type                                            | Description                      |
| ------ | ----------------------------------------------- | -------------------------------- |
| first  | <code>string</code> \| <code>Element</code>     | bus event name or dom element    |
| middle | <code>string</code> \| <code>function</code>    | bus event callback or event type |
| last   | <code>function</code> \| <code>undefined</code> | listener callback                |
| opts   | <code>Object</code>                             | event type options               |

<a name="off"></a>

## off

Removes a bus event callback or event listener

| Param  | Type                                            | Description                      |
| ------ | ----------------------------------------------- | -------------------------------- |
| first  | <code>string</code> \| <code>Element</code>     | bus event name or dom element    |
| middle | <code>string</code> \| <code>function</code>    | bus event callback or event type |
| last   | <code>function</code> \| <code>undefined</code> | listener callback                |

<a name="once"></a>

## once

Adds the event and removes it after the first occurrence

| Param  | Type                                            | Description                      |
| ------ | ----------------------------------------------- | -------------------------------- |
| first  | <code>string</code> \| <code>Element</code>     | bus event name or dom element    |
| middle | <code>string</code> \| <code>function</code>    | bus event callback or event type |
| last   | <code>function</code> \| <code>undefined</code> | listener callback                |
| opts   | <code>Object</code>                             | event type options               |

<a name="emit"></a>

## emit

Emits the given event

| Param     | Type                | Description                           |
| --------- | ------------------- | ------------------------------------- |
| event     | <code>string</code> | bus event name                        |
| ...params | <code>any</code>    | optional parameters for the callbacks |

<a name="emitAsync"></a>

## emitAsync

Emits the given event asyncronously

| Param     | Type                | Description                           |
| --------- | ------------------- | ------------------------------------- |
| event     | <code>string</code> | bus event name                        |
| ...params | <code>any</code>    | optional parameters for the callbacks |

<a name="inspect"></a>

## inspect ⇒ <code>Object</code>

Returns a clone of the events stack. Usefull for debugging
**Returns**: Object
