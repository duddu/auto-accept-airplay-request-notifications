import { viteBundler } from '@vuepress/bundler-vite'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'

import { AAR_VERSION } from './utils/meta'

export default defineUserConfig({
  lang: 'en-US',
  title: '(Auto) Accept AirPlay Requests',
  description: 'Seamless AirPlay streaming to your Mac - Automatically accept AirPlay requests from any device, no need to manually approve each notification alert.',
  theme: defaultTheme({
    hostname: 'https://auto-accept-airplay-requests.duddu.dev',
    repo: 'duddu/auto-accept-airplay-requests',
    docsDir: 'Docs',
    logo: '/images/logo.png',
    logoAlt: 'Accept AirPlay Requests',
    navbar: [
      { text: `v${AAR_VERSION}`, link: `https://github.com/duddu/auto-accept-airplay-requests/releases/v${AAR_VERSION}` },
    ],
    externalLinkIcon: false,
  }),
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'canonical', href: 'https://auto-accept-airplay-requests.duddu.dev' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/images/icons/android-icon-144x144.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192' , href: '/images/icons/android-icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Accept AirPlay Requests' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'application-name', content: 'Accept AirPlay Requests' }],
    ['meta', { name: 'msapplication-TileColor', content: '#8b65c2' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#8b65c2' }],
  ],
  plugins: [
    markdownHintPlugin({ alert: true }),
    markdownIncludePlugin({ useComment: false }),
  ],
  bundler: viteBundler(),
})
