# Brave 

Brave is a Chromium-based browser that is privacy-focused and has built-in ad-blocking capabilities. It is a good alternative to Google Chrome if you are looking for a browser that respects your privacy.

## Installation
[Dowload Brave](https://brave.com/download/)

## Recommended Settings

:::tabs
==Shields
`Trackers & ads blocking` - Aggressive <br>
`Upgrade connections to HTTPS` - Strict <br>
`Block Fingerprinting` - Enabled <br>
==Content Filtering
`EasyList Cookie` <br>
`Fanboy's Annoyances + uBO Annoyances` <br>
`Fanboy's Mobile Notifications` <br>
`Bypass Paywalls Clean Filters` <br>
`Adguard URL Tracking Protection Filters` <br>
`Brave Twitch Adblock Rules` <br>
==Privacy and Security
`WebRTC IP Handling Policy` - Disable Non-Proxied UDP <br>
`Use google services for push messaging` - Disabled <br>
`Auto-redirect AMP pages` - Enabled <br>
`Auto-redirect tracking URLs` - Enabled <br>
`Prevent sites from fingerprinting me based on my language preferences` - Enabled <br>

Under `Data Collection` - Disable all <br>
:::

## Remove / Disable Brave Bloatware 

:::warning
This Will Brake `Use secure DNS`. Will have to manually set it in REGEDIT
:::

[Brave Group Policy Options](https://support.brave.com/hc/en-us/articles/360039248271-Group-Policy) - Read and Change as you need

1. Open a text Editor
2. Paste This

```shell
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\Software\Policies\BraveSoftware\Brave]
"BraveWalletDisabled"=dword:00000001
"BraveVPNDisabled"=dword:00000001
"BraveRewardsDisabled"=dword:00000001
"PasswordManagerEnabled"=dword:00000000
"BraveAIChatEnabled"=dword:00000000
"IPFSEnabled"=dword:00000001
"TorDisabled"=dword:00000000
"DnsOverHttpsMode"="secure"
"DnsOverHttpsTemplates"="https://cloudflare-dns.com/dns-query"
```
3. Save as `.reg` file
4. run the `.reg` file <br>

### DnsOverHttpsTemplates  Options
Cloudflare - `https://cloudflare-dns.com/dns-query` <br>
AdGuard - `https://dns.adguard.com/dns-query` <br>
Mullvad - `https://base.dns.mullvad.net/dns-query` <br>
