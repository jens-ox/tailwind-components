import { html, component, useState } from 'haunted'
import './mobile'
import './entry'
import buttonElement from '../button'

const Menu = ({ entries, buttons }) => {
  const [active, setActive] = useState(-1)
  const [mobileOpen, setMobileOpen] = useState(false)
  return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"/>
    <!-- This example requires Tailwind CSS v1.4.0+ -->
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="lg:w-0 lg:flex-1">
            <a href="#" class="flex">
              <img class="h-8 w-auto sm:h-10" src="/src/assets/img/workflow-mark-on-white.svg" alt="Workflow" />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button @click=${() => setMobileOpen(!mobileOpen)} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            ${entries.map(({ name, entries, footer, link }, i) => html`
              <tw-menu-entry
                .name=${name}
                .active=${active === i}
                .entries=${entries}
                .footer=${footer}
                .link=${link}
                @toggle=${() => setActive(active === i ? -1 : i)}
              ></tw-menu-entry>
            `)}
          </nav>
          <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            ${buttons.map(button => buttonElement(button))}
          </div>
        </div>
      </div>

      <tw-menu-mobile .open=${mobileOpen} @close=${() => setMobileOpen(false)} />
    </div>
  `
}

customElements.define('tw-menu', component(Menu))
