const { component, html } = require('haunted')

const Link = ({ link, name, description, icon }) => {
  return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"/>
    <a href=${link} class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
      <div class="flex-shrink-0 h-6 w-6 text-indigo-600">
        <img class="text-indigo-600" src=${icon} alt=${name} />
      </div>
      <div class="space-y-1">
        <p class="text-base leading-6 font-medium text-gray-900">
          ${name}
        </p>
        <p class="text-sm leading-5 text-gray-500">
          ${description}
        </p>
      </div>
    </a>
  `
}

Link.observedAttributes = ['link', 'name', 'description', 'icon']

customElements.define('tw-menu-link', component(Link))
