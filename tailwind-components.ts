import { component } from 'haunted'

import Menu from './src/components/menu/index'
import MenuEntry from './src/components/menu/entry'

window.customElements.define('tw-menu', component(Menu))
window.customElements.define('tw-menu-entry', component(MenuEntry))
