# Brave 

Brave is a Chromium-based browser that is privacy-focused and has built-in ad-blocking capabilities. It is a good alternative to Google Chrome if you are looking for a browser that respects your privacy.

## Installation
[Dowload Brave](https://brave.com/download/)

## Recommended Settings

#### Settings -> Shields <br>
`Trackers & ads blocking` - Aggressive <br>
`Upgrade connections to HTTPS` - Strict <br>
`Block Fingerprinting` - Enabled <br>

#### Settings -> Shields -> Content Filtering <br>
`EasyList Cookie` <br>
`Fanboy's Annoyances + uBO Annoyances` <br>
`Fanboy's Mobile Notifications` <br>
`Bypass Paywalls Clean Filters` <br>
`Adguard URL Tracking Protection Filters` <br>
`Brave Twitch Adblock Rules` <br>

#### Settings -> Privacy and Security <br>
`WebRTC IP Handling Policy` - Disable Non-Proxied UDP <br>
`Use google services for push messaging` - Disabled <br>
`Auto-redirect AMP pages` - Enabled <br>
`Auto-redirect tracking URLs` - Enabled <br>
`Prevent sites from fingerprinting me based on my language preferences` - Enabled <br>

Under `Data Collection` - Disable all <br>


#### Settings -> Privacy and Security -> Security -> Manage V8 security <br>
`Don't allow sites to use the V8 optimizer`


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