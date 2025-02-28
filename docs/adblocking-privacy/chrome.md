# Chrome

:::danger Chrome MV3
Google’s Manifest V3 changes will [impact adblocking capabilities](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) and cripple existing extensions on chromium-based browsers. If you still need to use a chrome, use [uBO Lite](https://github.com/uBlockOrigin/uBOL-home), which is MV3 compatible, or use the recommendations below.
:::

## Extend MV2 to June 2025

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

## Alternatives
If you need to use a chromium-based browser only recommendation is brave <br>
- [Brave](https://brave.com/) - Will Support MV2 For certain extentions Like uBlock Origin

## Remove / Disbale Brave Bloatware
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
```
3. Save as `.reg` file
4. run the `.reg` file <br>