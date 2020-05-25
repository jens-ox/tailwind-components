import { html, component } from 'haunted'

function MobileLink ({ link, text }) {
  return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"/>
    <a href=${link} class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
      <div className="flex-shrink-0 relative">
        <slot></slot>
      </div>
      <div class="text-base leading-6 font-medium text-gray-900">
        ${text}
      </div>
    </a>
  `
}

MobileLink.observedAttributes = ['link', 'text']

customElements.define('tw-link-mobile', component(MobileLink))
