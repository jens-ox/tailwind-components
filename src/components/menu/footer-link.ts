import { html } from 'haunted'
import '@iconfu/svg-inject'
import { LinkWithOptionalIcon } from '../../interfaces/link'

export default function footerLink ({ title, icon, link }: LinkWithOptionalIcon) {
  return icon
    ? html`
      <div class="flow-root">
        <a href=${link} class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
          <div class="flex-shrink-0 h-6 w-6 text-gray-400">
            <img src=${icon} alt=${title} @load=${function () { window.SVGInject(this) }} />
          </div>
          <span>${title}</span>
        </a>
      </div>
    `
    : html`
      <li class="text-base leading-6 truncate">
        <a href=${link} class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
          ${title}
        </a>
      </li>
    `
}
