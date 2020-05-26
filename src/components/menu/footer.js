import { html } from 'haunted'
import footerLink from './footer-link'

export default function footer ({ entries }) {
  return html`
    <div class="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      ${entries.map(o => footerLink(o))}
    </div>
  `
}
