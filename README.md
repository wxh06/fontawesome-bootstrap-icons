# fontawesome-bootstrap-icons

[![version](https://img.shields.io/npm/v/fontawesome-bootstrap-icons?style=flat-square)](https://www.npmjs.com/package/fontawesome-bootstrap-icons)
![downloads](https://img.shields.io/npm/dm/fontawesome-bootstrap-icons?style=flat-square)
[![license](https://img.shields.io/github/license/wxh06/fontawesome-bootstrap-icons?style=flat-square)](https://github.com/wxh06/fontawesome-bootstrap-icons/blob/main/LICENSE)

[![codecov](https://codecov.io/gh/wxh06/fontawesome-bootstrap-icons/branch/main/graph/badge.svg)](https://codecov.io/gh/wxh06/fontawesome-bootstrap-icons)
[![Node.js CI](https://github.com/wxh06/fontawesome-bootstrap-icons/actions/workflows/node.js.yml/badge.svg)](https://github.com/wxh06/fontawesome-bootstrap-icons/actions/workflows/node.js.yml)

Font Awesome SVG Icon Package of [Bootstrap Icons](https://icons.getbootstrap.com/)

This is an adapter that enables you to use Bootstrap Icons with [Font Awesome](https://fontawesome.com/)'s [SVG component](https://fontawesome.com/docs/web/dig-deeper/svg-core) for Vue.js and React.

See also: [Web Fonts vs SVG | Font Awesome Docs](https://fontawesome.com/docs/web/dig-deeper/webfont-vs-svg)

## Installation

```shell
npm install fontawesome-bootstrap-icons
# or
yarn add fontawesome-bootstrap-icons
# or
pnpm add fontawesome-bootstrap-icons
```

You may also want to install packages provided by [Fort Awesome](https://www.npmjs.com/org/fortawesome).

```shell
# Vue.js 2.x
npm i @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-2

# Vue.js 3.x
npm i @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3

# React
npm i @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
```

See also: [Set Up with Vue](https://fontawesome.com/docs/web/use-with/vue), [Set Up with React](https://fontawesome.com/docs/web/use-with/react).

## Usage

Import icons from `fontawesome-bootstrap-icons`.

```javascript
// ESM
import { biHeart, biHeartFill } from "fontawesome-bootstrap-icons";
// CJS
const { biHeart, biHeartFill } = require("fontawesome-bootstrap-icons");
```

### React

```jsx
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { biHeart } from "fontawesome-bootstrap-icons";

const element = <FontAwesomeIcon icon={biHeart} style={{ height: "1em" }} />;

ReactDOM.render(element, document.body);
```

Visit [Add Icons with React | Font Awesome Docs](https://fontawesome.com/docs/web/use-with/react/add-icons) for more details.

### Vue.js

```javascript
// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
// import specific icons
import { biHeartFill } from "fontawesome-bootstrap-icons";

// add icons to the library
library.add(biHeartFill);
```

```vue
<script setup>
// import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import specific icons
import { biHeart } from "fontawesome-bootstrap-icons";
</script>

<template>
  <FontAwesomeIcon :icon="['bi', 'heart-fill']" />
  <FontAwesomeIcon :icon="biHeart" />
</template>
```

Visit [Add Icons with Vue | Font Awesome Docs](https://fontawesome.com/docs/web/use-with/vue/add-icons) for more details.

### For TypeScript users

You have to overwrite [`IconPrefix`](https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-common-types/index.d.ts) defined in [@fortawesome/fontawesome-common-types](https://www.npmjs.com/package/@fortawesome/fontawesome-common-types) if you are using TypeScript.

Place the following line in a `.d.ts` type declaration file (in [Remix](https://remix.run/)'s `remix.env.d.ts` or [Vite](https://vitejs.dev/)'s `env.d.ts`, for example) that has been included in `tsconfig.json`:

```typescript
/// <reference types="fontawesome-bootstrap-icons/types" />
```

## Copyright and license

Code and icons are released under the [MIT License](https://opensource.org/licenses/MIT).

- Icons copyright 2019–2022 [Mark Otto (@mdo)](https://github.com/mdo) and the [Bootstrap Authors](https://github.com/twbs/icons/graphs/contributors).
- Type declaration copyright 2022 Fonticons, Inc.
- Build scripts copyright 2022 Xinhe Wang.
