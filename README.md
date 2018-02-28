# Aurora Browser SDK

> 💥 I still don't know how should it work. This project is just a first look preview of SDK in my mind. This isn't work for now.

## Install

```bash
npm install ozio/aurora-browser-sdk
```

then

```js
import AuroraSDK from 'aurora-browser-sdk';
```

or more legacy:

```js
const AuroraSDK = require('aurora-browser-sdk');
```

## Options

| Key                | Type      | Default | Description |
| ------------------ | --------- |:-------:| ----------- |
|                    |           |         |             |

## Example

```js
import AuroraSDK from 'aurora-browser-sdk';
import keyboardMiddleware from 'aurora-browser-sdk/keyboard';

AuroraSDK
  .init()
  .use(keyboardMiddleware())
;
```

## Roadmap

- [ ] Handshake SDK with Extension;
- [ ] Define website options (like Keymaps or something);
- [ ] Send website telemetry to Extension;

