```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/tailwind-components.js';
import menuData from '../structure/menu'

export default {
  title: 'Tailwind UI Components',
  component: 'tw-menu',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Tailwind Components

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add tailwind-components
```

```js
import 'tailwind-components/tailwind-components.js';
```

```js preview-story
export const Simple = () => html`
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css">
  <tw-menu .entries=${menuData.entries} .buttons=${menuData.buttons}></tw-menu>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`#
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css">
  <tw-menu .entries=${menuData.entries} .buttons=${menuData.buttons}></tw-menu>
`;
```
