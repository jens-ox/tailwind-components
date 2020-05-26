import { html } from 'haunted'
import ButtonInterface from '../../interfaces/button'

export default function Button ({ title, link, type }: ButtonInterface) {
  return type === 'primary'
    ? html`
      <span class="inline-flex rounded-md shadow-sm">
        <a href=${link} class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
          ${title}
        </a>
      </span>
    `
    : html`
      <a href=${link} class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
        ${title}
      </a>
    `
}
