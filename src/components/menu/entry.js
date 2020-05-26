import { html, component } from 'haunted'
import linkElement from './link'
import footerElement from './footer'

const baseClass = 'absolute -ml-4 mt-3 transform transition-all px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'

function Entry ({ active, name, entries = [], footer, link }) {
  const event = new CustomEvent('toggle')
  return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"/>
  
    <!-- if no entries are passed, no drop-down needs to be rendered -->
    ${!entries.length
      ? html`
        <a
          href=${link}
          class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
        >
          ${name}
        </a>
      `
      : html`
        <button
          @click=${() => this.dispatchEvent(event)}
          type="button"
          class="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
          <span>${name}</span>
          <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
          <svg class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      `}

    ${entries.length
      ? html`
        <div class=${`${baseClass} ${active
          ? 'duration-200 ease-out opacity-100 translate-y-0 visible'
          : 'duration-200 ease-in opacity-0 translate-y-1 invisible'}`}>
          <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs overflow-hidden">
              <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                ${entries.map(entry => linkElement(entry))}
              </div>
              ${footerElement(footer)}
            </div>
          </div>
        </div>
      `
      : ''}
  </div>
  `
}

customElements.define('tw-menu-entry', component(Entry))
