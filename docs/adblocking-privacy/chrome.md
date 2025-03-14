# Chrome

:::danger Chrome MV3
Google’s Manifest V3 changes will [impact adblocking capabilities](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) and cripple existing extensions on chromium-based browsers. If you still need to use a chrome, use [uBO Lite](https://github.com/uBlockOrigin/uBOL-home), which is MV3 compatible, or use the recommendations below.
:::

## Extend MV2 to June 2025
:::warning
Using RegEdit Will Brake `Use secure DNS`. Will have to manually set it in regedit
:::

## Regedit
1. Open a text Editor
2. Paste one the following

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google]

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"ExtensionManifestV2Availability"=dword:00000002
"DnsOverHttpsMode"="secure"
"DnsOverHttpsTemplates"="https://cloudflare-dns.com/dns-query"
```
3. Save as `.reg` file
4. run the `.reg` file, now you have MV2 until June 2025

### DnsOverHttpsTemplates  Options
Cloudflare - `https://cloudflare-dns.com/dns-query` <br>
AdGuard - `https://dns.adguard.com/dns-query` <br>
Mullvad - `https://base.dns.mullvad.net/dns-query` <br>

## Alternatives
If you need to use a chromium-based browser only recommendation is brave <br>
- [Brave](/adblocking-privacy/brave) - Will Support MV2 For certain extentions Like uBlock Origin
