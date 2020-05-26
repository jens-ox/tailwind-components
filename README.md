# Tailwind Components

First of all, this is more of an experiment. Obviously, only the Tailwind UI components with publicly available source are considered here. Actually, this is currently only the [header example](https://tailwindui.com/components/marketing/elements/headers).

In the [Full-Stack Developer job post](https://jobs.tailwindui.com/full-stack-developer), one of the tasks is building official Tailwind UI components for React and Vue. Why not leverage Web Components? [According to custom-elements-everywhere](https://custom-elements-everywhere.com/), Web Components are starting to become natively usable in most frontend frameworks (or libraries).

## Trying it out

The menu object from the example looks something like this:

```js
const menu = {
  buttons: [{
    name: 'Sign in',
    link: '#',
    type: 'secondary'
  }, {
    name: 'Sign up',
    link: '#',
    type: 'primary'
  }],
  entries: [{
    name: 'Solutions',
    entries: [{
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: '/src/assets/img/analytics.svg',
      link: '#'
    } /* ... */],
    footer: {
      entries: [{
        name: 'Watch Demo',
        icon: '/src/assets/img/watch-demo.svg',
        link: '#'
      }, {
        name: 'Contact Sales',
        icon: '/src/assets/img/contact-sales.svg',
        link: '#'
      }]
    }
  }, {
    name: 'Pricing',
    link: '#'
  }, {
    name: 'Docs',
    link: '#'
  }, {
    name: 'More',
    entries: [{
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      icon: '/src/assets/img/help-center.svg',
      link: '#'
    } /* ... */],
    footer: {
      name: 'Recent Posts',
      link: {
        name: 'View all posts →',
        link: '#'
      },
      entries: [{
        name: 'Boost your conversion rate',
        link: '#'
      } /* ... */]
    }
  }]
}
```

A native Web Component would then look something like this:

```html
<tw-menu .entries=${menu.entries} .buttons=${menu.buttons}></tw-menu>
```

The same would look like this in preact:

```jsx
<tw-menu entries={menuData.entries} buttons={menuData.buttons}></tw-menu>
```

Or in Vue:

```vue
<tw-menu :entries="menuData.entries" :buttons="menuData.buttons"></tw-menu>
```

See [the menu example](src/components/examples/menu.js) for the full code.

## Development

```bash
git clone [repo] && cd [repo]
npm install # or yarn
npm run dev # or yarn dev
```

## Pain Points and Future Work

### Shared Styles

The usage of shared CSS in Web Components -- see [this article from 2016](https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/), apparently not too much has changed since then, but I didn't really dig deep.
Currently, each component includes the CDN version of Tailwind, which is kind of the worst way to use Tailwind I guess.

### Building as a library

Purging out unused CSS from the components might turn out to be quite difficult. I don't know if there's any tooling for this.

### Handling icons

The two ways of passing data to a UI library -- through attributes/properties or through slots -- are both kinda awkward for passing icons. For example, a menu entry might look something like this as an object:

```js
{
  title: 'Analytics',
  description: 'Get a better understanding of where your traffic is coming from.',
  link: '#',
  icon: '/src/assets/img/analytics.svg'
}
```

This makes sense, but now styling the SVG is hard -- even with `stroke="currentColor"` set in the SVG file, the color won't be inherited, as the embedded SVG is its own document.

The alternative would be to use components with a slot:

```html
<menu-entry
  title="Analytics"
  description="Get a better understanding of where your traffic is coming from."
  link="#"
>
  <svg>
    ...
  </svg>
</menu-entry>
```

This makes the markup way harder to maintain.

**Possible solutions**:

* ship icons with the library, like [Vuetify](https://vuetifyjs.com/en/customization/icons/) does
* use a library like [SVGInject](https://github.com/iconfu/svg-inject) to inject svg files into the DOM
* use the SVG as filter

For now, SVGInject is used. A native solution would be nicer.

### TypeScript

UI libraries heavily rely on passing quite complex objects around. Having type support for those is nice.

## Credits

All credit goes to @adamwathan and @sschoger for creating TailwindCSS and TailwindUI. I'm really grateful for those tools making frontend development so much more enjoyable.