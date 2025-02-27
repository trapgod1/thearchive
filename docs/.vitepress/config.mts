import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

export default defineConfig({
  vite: { 
    optimizeDeps: { 
          exclude: [ 
            '@nolebase/vitepress-plugin-inline-link-preview/client', 
          ], 
        }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
        '@nolebase/vitepress-plugin-inline-link-preview', 
        '@nolebase/ui',
      ], 
    }, 
  }, 
markdown: {
  config(md) {
    md.use(tabsMarkdownPlugin)
    md.use(InlineLinkPreviewElementTransform) 
  }
},
title: "The Archive",
  description: 'A site will curated guides for Tools and Software',
  appearance: 'dark',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guides',
        items: [
          { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
          { text: 'Gaming', link: '/gaming/welcome' },
          { text: 'Downloading', link: '/downloading/welcome' },
          { text: 'Torrenting', link: '/torrenting/welcome' },
          { text: 'Android', link: '/android/welcome' },
          { text: 'Windows', link: '/windows/welcome' },
          { text: 'Tools', link: '/tools/welcome' },
          { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
        ]
      }
    ],

    sidebar: {
      '/adblocking-privacy/': [
        {
          text: 'Adblocking & Privacy',
          items: [
            { text: 'Welcome', link: '/adblocking-privacy/welcome' },
            { text: 'uBlock Origin', link: '/adblocking-privacy/ublockorigin' },
            { text: 'Twitch Adblock', link: '/adblocking-privacy/twitchadblock' },
            { text: 'DNS Adblock', link: '/adblocking-privacy/dnsadblock' },
            { text: 'Chrome', link: '/adblocking-privacy/chrome' },
            { text: 'Firefox Setup', link: '/adblocking-privacy/firefoxsetup' },
            { text: 'Firefox Forks', link: '/adblocking-privacy/firefoxforks' },
          ],
        },
        {
          text: 'See also',
          items: [
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
          ]
        }
      ],
      '/gaming/': [
        {
          text: 'Gaming',
          items: [
            //{ text: 'Welcome', link: '/gaming/welcome' },
            { text: 'Minecraft Launcher', link: '/gaming/minecraftlauncher' },
            { text: 'Lan Multiplayer', link: '/gaming/lanmultiplayer' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
          ]
        }
      ],
      '/downloading/': [
        {
          text: 'Downloading',
          items: [
            //{ text: 'Welcome', link: '/downloading/welcome' },
            {
              text: 'Download Managers',
              collapsed: false,
              items: [
                { text: 'Internet Download Manager', link: '/downloading/downloadmanager/idm' },
                { text: 'JDownloader', link: '/downloading/downloadmanager/jdownloader' },
              ]
            },
            {}
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
          ]
        }
      ],
      '/torrenting/': [
        {
          text: 'Torrenting',
          items: [
            //{ text: 'Welcome', link: '/torrenting/welcome' },
            { text: 'Torrent Client', link: '/torrenting/qbittorrent' },
            { text: 'Remote Torrenting', link: '/torrenting/remotetorrenting' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
          ]
        }
      ],
      '/android/': [
        {
          text: 'Android',
          items: [
            { text: 'Welcome', link: '/android/welcome' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
          ]
        }
      ],
      '/windows/': [
        {
          text: 'Windows',
          items: [
            //{ text: 'Welcome', link: '/windows/welcome' },
            { text: 'Windows & Office Activation', link: '/windows/windowsandofficeactivation' },
            { text: 'Unattended Install', link: '/windows/unattendedinstall' },
            { text: 'VPN', link: '/windows/vpn' },
            //{ text: 'Winrar', link: '/windows/winrar' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Tools', link: '/tools/welcome' },
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            //{ text: 'In Development', link: '/tools/welcome' },
            { text: 'Twitch Tools', link: '/tools/twitchtools' },
            { text: 'Discord Tools', link: '/tools/discordtools' },
            { text: 'Windows Tools', link: '/tools/windowstools' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Miscellaneous', link: '/miscellaneous/welcome' },
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
          ]
        }
      ],
      '/miscellaneous/': [
        {
          text: 'Miscellaneous',
          items: [
            { text: 'Welcome', link: '/gaming/welcome' },
          ]
        },
        {
          text: 'See also',
          items: [
            { text: 'Adblocking & Privacy', link: '/adblocking-privacy/welcome' },
            { text: 'Gaming', link: '/gaming/minecraftlauncher' },
            { text: 'Downloading', link: '/downloading/downloadmanager/idm' },
            { text: 'Torrenting', link: '/torrenting/qbittorrent' },
            { text: 'Android', link: '/android/welcome' },
            { text: 'Windows', link: '/windows/windowsandofficeactivation' },
            { text: 'Tools', link: '/tools/welcome' },
          ]
        }
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Trap',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/trapgod1/trapgod1.github.io' }
    ],
  }
});