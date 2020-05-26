import { html } from 'haunted'
import SVGInject from '@iconfu/svg-inject' // eslint-disable-line

export default function footerLink ({ name, icon, link }) {
  return html`
    <div class="flow-root">
      <a href=${link} class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
        <div class="flex-shrink-0 h-6 w-6 text-gray-400">
          <img src=${icon} alt=${name} onload="SVGInject(this)" />
        </div>
        <span>${name}</span>
      </a>
    </div>
  `
}
