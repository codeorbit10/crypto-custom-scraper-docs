import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Custom Crypto Scraper Docs',
  base: '/crypto-custom-scraper-docs/',
  themeConfig: {
    sidebar: [
      { text: 'TG/Discord Channel + Twitter Scraper',  link: './channel-scraper/' },
      { text: 'Trading Bot',      link: './trading-bot/' },
      { text: 'Exchange Scraper', link: './cex-listing-scraper/' },
    ],
    outline: false,
    docFooter: {
      prev: false,
      next: false
    }
  }
})
