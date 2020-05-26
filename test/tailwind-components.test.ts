import { html, fixture, expect } from '@open-wc/testing'
import { it, describe } from 'mocha'

import { TailwindComponents } from '../src/TailwindComponents.js'
import '../tailwind-components.js'

describe('TailwindComponents', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: TailwindComponents = await fixture(html`
      <tailwind-components></tailwind-components>
    `)

    expect(el.title).to.equal('Hey there')
    expect(el.counter).to.equal(5)
  })

  it('increases the counter on button click', async () => {
    const el: TailwindComponents = await fixture(html`
      <tailwind-components></tailwind-components>
    `)
    el.shadowRoot!.querySelector('button')!.click()

    expect(el.counter).to.equal(6)
  })

  it('can override the title via attribute', async () => {
    const el: TailwindComponents = await fixture(html`
      <tailwind-components title="attribute title"></tailwind-components>
    `)

    expect(el.title).to.equal('attribute title')
  })

  it('passes the a11y audit', async () => {
    const el: TailwindComponents = await fixture(html`
      <tailwind-components></tailwind-components>
    `)

    await expect(el).shadowDom.to.be.accessible()
  })
})
