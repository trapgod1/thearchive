# Firefox Setup Guide

## Install Firefox

[*__Firefox Install Link__*](https://www.mozilla.org/firefox/new/)


## Settings

1. Go to Privacy & Security
2. Set Enhanced Tracking Protection to 'Strict'
3. Scroll Down to 'Firefox Data Collection and Use' and uncheck all 
4. Scroll down to 'HTTPS-Only Mode' and Set to 'Enable HTTPS-Only Mode in all windows'
5. Scroll down to 'DNS over HTTPS' and set to 'Max Protection' , Keep Provider as Cloudflare unless you want to change to an [adblocking DNS Server](/adblocking-privacy/dnsadblock.md)

## Extensions

* **[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)**
* **[Violetmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)**

## uBlock Origin Filter Lists

<div style="width: 100%; text-align: left;">
    <img src="/assets/adblocking-privacy/uBlockOriginFilterLists.png" alt="UblockOriginFilterLists" style="width: 50%; height: auto;">
</div>

* [Actually Legitimate URL Shortener Tool](https://filterlists.com/lists/actually-legitimate-url-shortener-tool) (2k rules)
* [Bypass Paywalls Clean filter](https://filterlists.com/lists/bypass-paywalls-clean-filter) (960 rules)

## Useful User Scripts

* Bypass-all-shortlinks-debloated - [Install Link](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js)
* Adguard Extra - [Install Link](https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js)

## Betterfox Tweaks

[Source](https://github.com/yokoffing/BetterFox)
***
### Betterfox
31% faster than regular Firefox<sup>[1](https://medium.com/@mihirgrand/comparing-popular-firefox-forks-6fa83fdfdaad#:~:text=31%25%20more%20than%20vanilla%20Firefox)</sup> :rocket:

[about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/). 

:new: Now with [ESR support](https://github.com/yokoffing/Betterfox/tree/esr115#betterfox-esr).
***
### Made for everyday browsing
**A secure, blazing fast browsing experience. Without breakage.**

Betterfox is an opinionated preference list inspired by the [law of diminishing returns](https://web.archive.org/web/20231108092752if_/https://pmctraining.com/site/wp-content/uploads/2018/04/Law-of-Diminishing-Returns-CHART.png) and the [minimum effective dose](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e).
***
### Required reading
*If you don't have it already: [Get Firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)*

0) Create a [backup profile](https://github.com/yokoffing/Betterfox/wiki/Backup).
1) Download the user.js file [here](https://raw.githubusercontent.com/yokoffing/Betterfox/main/user.js) (Right click > `Save Link As…`).
2) Review [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) and make any necessary changes.
   * See also [Optional Hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening) for other recommendations.
3) Open Firefox. In the URL bar, type `about:profiles` and press **Enter**.
4) For the profile you want to use (or use default), click **Open Folder** in the **Root Directory** section.
5) Move the `user.js` file into the folder.
6) Restart Firefox
***
### Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Privacy:** protect your data without causing site breakage
***
### Simple configs

`Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to settings within Firefox.

The `user.js` — a configuration file that controls Firefox settings — is curated from these guides.

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js)   | Increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/main/Securefox.js) | Protect user data without causing site breakage. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js)  | Provide a clean, distraction-free browsing experience. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js) | Get Edge-like smooth scrolling on your favorite browser — or choose something more your style. |
| [user.js](https://github.com/yokoffing/Betterfox/blob/main/user.js) | All the essentials. None of the breakage. This is your `user.js`. |