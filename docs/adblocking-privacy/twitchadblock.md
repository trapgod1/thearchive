# Twitch Adblock Methods

::: danger **DO NOT COMBINE MULTIPLE ADBLOCKING METHODS**
:::
:::tip Banner and Pop-up Ads will be blocked by **[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)** - **[Setup Guide](/adblocking-privacy/ublockorigin.md)**
:::

## Client Side (Easy)

:::warning **Note** - Must have a Script Manager Extension Installed like **[Violetmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)**
:::
* ⭐ **Vaft - [Install Link](https://github.com/pixeltris/TwitchAdSolutions/raw/master/vaft/vaft.user.js)**
    - It's the same as video-swap-new but attempts to get a clean stream faster (it may suffer from more freezing/playback issues).
* **Adguard Extra - [Install Link](https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js)**
    - Same as Vaft but maintained by the [Adguard Team](https://github.com/AdguardTeam/AdGuardExtra)
* **Video-swap-new - [Install Link](https://github.com/pixeltris/TwitchAdSolutions/raw/master/video-swap-new/video-swap-new.user.js)** 
    - Uses the embed player during ads 
    - Quality is dropped to 360p when ads are being played

## Server Side (Hard)
* TTV LOL PRO V2 - [Firefox](https://addons.mozilla.org/addon/ttv-lol-pro/) - [Chrome](https://chrome.google.com/webstore/detail/ttv-lol-pro/bpaoeijjlplfjbagceilcgbkcdjbomjd) - [code](https://github.com/younesaassila/ttv-lol-pro)
* TTV LOL PRO V1 - [Last V1 Release](https://github.com/younesaassila/ttv-lol-pro/releases/tag/v1.9.3) - [Firefox](https://github.com/younesaassila/ttv-lol-pro/releases/download/v1.9.3/v1.9.3-firefox.xpi)
    - Will need to add https proxies for it to work from below or your own

## Proxies

:::danger Proxies downsides

You need to assume that if you use some other user's infrastructure, you're accepting that required maintenance and proxy downtime may occur. You may want to go by the [host your own](#host-your-own-proxy) route. 
Mobile platforms use the initial streamer.m3u8 ad block system, thus making that once you get the first request done, you no longer need that proxy working unless you switch between streamers. TTV LOL PRO V2 for example uses HTTP proxies, and it is required to have the server running all the time to not have buffering issues, thus making it much costly.

Consider giving your support by covering some of their infrastructure costs via donations if you feel they do a great job. You would have to pay 12€ / month to Twitch if amazing people in the community didn't spend their time looking for circumventions.
:::

### Proxies list
### m3u8 proxies (Mobile users and TTV LOL PRO V1 compatible)

- `https://lb-eu.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to various countries.
  - Twitch CDN assignment: `EU`
  - Recommended for Desktop & Mobile users.
- `https://lb-eu2.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to various countries.
  - Twitch CDN assignment: `EU`
  - Recommended for Desktop & Mobile users.
- `https://lb-eu3.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to Russia.
  - Twitch CDN assignment: `EU`
  - Recommended for Mobile users.
- `https://lb-eu4.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to various countries.
  - Twitch CDN assignment: `EU`
  - Recommended for Desktop & Mobile users.
- `https://lb-eu5.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to various countries.
  - Twitch CDN assignment: `EU`
  - Recommended for Desktop & Mobile users.
- `https://lb-na.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to Phoenix, AZ, US.
  - Twitch CDN assignment: `NA`
  - Recommended for Desktop & Mobile users.
- `https://lb-as.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to various countries.
  - Twitch CDN assignment: `AS (Singapore/Jakarta)`
  - Recommended for Desktop & Mobile users.
- `https://lb-sa.cdn-perfprod.com` - [maintainer](https://github.com/zGato) / [current status](https://status.cdn-perfprod.com)
  - Proxied to Chile.
  - Twitch CDN assignment: `SA (Chile)`
  - Experimental.
- `https://eu.luminous.dev` - [maintainer](https://github.com/AlyoshaVasilieva) / [current status](https://stats.uptimerobot.com/N2pVRCZAjg)
  - Proxied to Kazakhstan.
  - Twitch CDN assignment: `EU`
  - Recommended for Desktop & Mobile users.
- `https://eu2.luminous.dev` - [maintainer](https://github.com/AlyoshaVasilieva) / [current status](https://stats.uptimerobot.com/N2pVRCZAjg)
  - Proxied to North Macedonia.
  - Twitch CDN assignment: `EU`
  - Recommended for Mobile users.
- `https://as.luminous.dev` - [maintainer](https://github.com/AlyoshaVasilieva) / [current status](https://stats.uptimerobot.com/N2pVRCZAjg)
  - Proxied to China.
  - Twitch CDN assignment: `EU/NA`
  - Recommended for Desktop & Mobile users.


## Host your own m3u8 proxy

:::warning Status: Uncertain
It was broken for a while due to Twitch's integrity check, rolled out then reverted May 31st/June 1st 2023.
:::

### Luminous TTV - [Source](https://github.com/AlyoshaVasilieva/luminous-ttv)
A [Rust](https://www.rust-lang.org) server to retrieve and relay a playlist for Twitch livestreams/VODs.

By running this server, and using [a browser extension](https://github.com/AlyoshaVasilieva/luminous-ttv-ext) to relay certain requests to it, Twitch will not
display any ads.

1. Download the [Server](https://github.com/AlyoshaVasilieva/luminous-ttv/releases/latest)
2. Run the Server

### Extension to Connect to your m3u8 proxy - [Source](https://github.com/AlyoshaVasilieva/luminous-ttv-ext)

### Luminous TTV browser extension
A browser extension to avoid ads on Twitch. See [Luminous TTV](https://github.com/AlyoshaVasilieva/luminous-ttv) for the other half
of the code. Should work in any Chrome-like browser and Firefox.

### Setup

Prerequisite: The [server](https://github.com/AlyoshaVasilieva/luminous-ttv) must be running on your machine for this extension to work.

1. Download [the latest release](https://github.com/AlyoshaVasilieva/luminous-ttv-ext/releases/latest).
2. Load the extension:
   * Chrome: Open the Extensions page, enable *Developer mode*, and drag the ZIP onto
     the page. Alternatively, use *Load unpacked* to load the contents of the ZIP file.
   * Firefox: In the extensions tab, click the gear, select *Debug Add-ons*,
     and use *Load Temporary Add-on*. Extension will be removed on every browser
     restart.

## For mobile users
### [RECOMMENDED] Server-sided blocking methods

Proxies are usually the best and most reliable way to circumvent Twitch Ads. Either way, check the [downsides of proxies](#proxies). 

- `Xtra for Twitch` - [f-droid](https://f-droid.org/packages/com.github.andreyasadchy.xtra/) / [code](https://github.com/crackededed/Xtra)
  - Twitch player for Android.
  - You can select your own custom proxy. You can [host your own](#host-your-own-m3u8-proxy) or choose one from the [following list](#proxies).
  - Use the [following syntax](#mobile-syntax) when using your own proxy or one from the list.
  - Alternatively you can also use standard HTTP proxies.
  - Partially broken in some regions for some users. 
- `PurpleTV` - [apk](https://purpletv.aeong.win/)
  - Modified Twitch Android app with added functionalities.
  - You can select your own custom proxy. You can [host your own](#host-your-own-m3u8-proxy) or choose one from the [following list](#proxies).
  - Use the [following syntax](#mobile-syntax) when using your own proxy or one from the list.
  - Code is private and some features are locked behind a paywall.
  - Partially broken in some regions for some users.
- `TwitchAdBlock` (for iOS) - [code](https://github.com/level3tjg/TwitchAdBlock)
  - Modified Twitch iOS app with added functionalities.
  - **You must be able to sideload ipas to your iOS device.**
  - By default, client-sided ad block mechanism is enabled. It may or may not work for you.
  - You can select your own HTTP custom proxy. You're only proxying usher.ttvnw.net requests, and by default, `TTV LOL PRO` proxy is being used (if proxy option is manually enabled).

## Mobile syntax

To use any of the proxies listed [here](#proxies) you need to use a specific syntax depending on your modded app. You can use the following as reference:

To use all the proxies with Twitch modded apps you need to specify in the address field the following: 
- `https://proxyaddress/live/$channel?allow_source=true&allow_audio_only=true&fast_bread=true` (Tested with Xtra app)
- `https://proxyaddress/live/$channelName` (Tested with PurpleTV app)

`proxyaddress` replace the proxy address with your own/from the list (ex: lb-eu.cdn-perfprod.com)

`$channel` or `$channelName` are the variables for the channel name. Change it if your app uses other variable.

`?allow_source=true&allow_audio_only=true&fast_bread=true` are some variables asking for a playlist with those options available. Some apps may use them or more options and some others may not.