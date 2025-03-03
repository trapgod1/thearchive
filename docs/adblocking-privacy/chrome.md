# Chrome

:::danger Chrome MV3
Google’s Manifest V3 changes will [impact adblocking capabilities](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) and cripple existing extensions on chromium-based browsers. If you still need to use a chrome, use [uBO Lite](https://github.com/uBlockOrigin/uBOL-home), which is MV3 compatible, or use the recommendations below.
:::

## Extend MV2 to June 2025

:::tabs
==Regedit
1. Open a text Editor
2. Paste one of these

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google]

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"ExtensionManifestV2Availability"=dword:00000002

```

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google]

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"DnsOverHttpsMode"="automatic"
"DnsOverHttpsTemplates"="https://1.1.1.1/dns-query{?dns}"
"ExtensionManifestV2Availability"=dword:00000002

```
3. Save as `.reg` file
4. run the `.reg` file, now you have MV2 until June 2025

==Flags
1. Go to `chrome://flags/`
2. Search for `MV2`

<div style="width: 100%; text-align: left;">
    <img src="/assets/adblocking-privacy/chromemv2flags.png" alt="chromemv2flags" style="width: 100%; height: auto;">
</div>

## Alternatives
If you need to use a chromium-based browser only recommendation is brave <br>
- [Brave](/adblocking-privacy/brave) - Will Support MV2 For certain extentions Like uBlock Origin
