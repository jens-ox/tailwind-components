import { html } from 'haunted'
import footerLink from './footer-link'

export default function footer ({ name, link, entries }) {
  return name
    ? html`
      <div class="px-5 py-5 bg-gray-100 space-y-5 sm:px-8 sm:py-8">
        <div class="space-y-4">
          <h3 class="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
            ${name}
          </h3>
          <ul class="space-y-4">
            ${entries.map(o => footerLink(o))}
          </ul>
        </div>
        ${link ? html`
          <div class="text-sm leading-5">
            <a href=${link.link} class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              ${link.name}
            </a>
          </div>
        ` : ''}
      </div>
    `
    : html`
      <div class="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
        ${entries.map(o => footerLink(o))}
      </div>
    `
}
