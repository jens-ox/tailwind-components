# Tailwind Components

First of all, this is more of an experiment. Obviously, only the Tailwind UI components with publicly available source are considered here.

In the [Full-Stack Developer job post](https://jobs.tailwindui.com/full-stack-developer), one of the tasks is building official Tailwind UI components for React and Vue. Why not leverage Web Components? [According to custom-elements-everywhere](https://custom-elements-everywhere.com/), Web Components are starting to become natively usable in most frontend frameworks (or libraries).

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