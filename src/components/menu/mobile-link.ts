import { html } from 'haunted'
import { Link } from '../../interfaces/link'

function MobileLink ({ link, title }: Link) {
  return html`
    <a href=${link} class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
      <div className="flex-shrink-0 relative">
        <slot></slot>
      </div>
      <div class="text-base leading-6 font-medium text-gray-900">
        ${title}
      </div>
    </a>
  `
}

MobileLink.observedAttributes = ['link', 'text']

export default MobileLink
