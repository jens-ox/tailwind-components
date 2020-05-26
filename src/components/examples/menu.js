import { html, render } from 'haunted'

const menuData = {
  buttons: [{
    name: 'Sign in',
    link: '#',
    type: 'secondary'
  }, {
    name: 'Sign up',
    link: '#',
    type: 'primary'
  }],
  entries: [{
    name: 'Solutions',
    entries: [{
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: '/src/assets/img/analytics.svg',
      link: '#'
    }, {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      icon: '/src/assets/img/engagement.svg',
      link: '#'
    }, {
      name: 'Security',
      description: 'Your customer\'s data will be safe and secure.',
      icon: '/src/assets/img/security.svg',
      link: '#'
    }, {
      name: 'Integrations',
      description: 'Connect with third-party tools that you\'re already using.',
      icon: '/src/assets/img/integrations.svg',
      link: '#'
    }, {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: '/src/assets/img/automations.svg',
      link: '#'
    }],
    footer: {
      entries: [{
        name: 'Watch Demo',
        icon: '/src/assets/img/watch-demo.svg',
        link: '#'
      }, {
        name: 'Contact Sales',
        icon: '/src/assets/img/contact-sales.svg',
        link: '#'
      }]
    }
  }, {
    name: 'Pricing',
    link: '#'
  }, {
    name: 'Docs',
    link: '#'
  }, {
    name: 'More',
    entries: [{
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      icon: '/src/assets/img/help-center.svg',
      link: '#'
    }, {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      icon: '/src/assets/img/guides.svg',
      link: '#'
    }, {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      icon: '/src/assets/img/events.svg',
      link: '#'
    }, {
      name: 'Security',
      description: 'Understand how we take your privacy seriously.',
      icon: '/src/assets/img/security.svg',
      link: '#'
    }],
    footer: {
      name: 'Recent Posts',
      link: {
        name: 'View all posts →',
        link: '#'
      },
      entries: [{
        name: 'Boost your conversion rate',
        link: '#'
      }, {
        name: 'How to use search engine optimization to drive traffic to your site',
        link: '#'
      }, {
        name: 'Improve your customer experience',
        link: '#'
      }]
    }
  }]
}

class Menu extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    render(this.render(), this.shadowRoot)
  }

  render () {
    return html`
      <tw-menu .entries=${menuData.entries} .buttons=${menuData.buttons}></tw-menu>
    `
  }
}

customElements.define('tw-example-menu', Menu)
