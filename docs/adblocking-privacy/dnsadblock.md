# DNS Adblocking

Encrypted DNS with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. Encrypted DNS will not help you hide any of your browsing activity.

## Recommended Public Providers

These are our favorite public DNS resolvers based on their privacy and security characteristics, and their worldwide performance. Some of these services offer basic DNS-level blocking of malware or trackers depending on the server you choose, but if you want to be able to see and customize what is blocked you should use a dedicated DNS filtering product instead.

| DNS Provider | Protocols | Logging / Privacy Policy | [ECS](https://www.privacyguides.org/en/advanced/dns-overview/#what-is-edns-client-subnet-ecs) | Filtering | Signed Apple Profile |
|---|---|---|---|---|---|
| ⭐[**AdGuard Public DNS**](https://adguard-dns.io/en/public-dns.html) | Cleartext   DoH/3   DoT   DoQ   DNSCrypt | Anonymized| Anonymized | Based on server choice. Filter list being used can be found [here.](https://github.com/AdguardTeam/AdGuardDNS) | [Yes](https://adguard.com/en/blog/encrypted-dns-ios-14.html) |
| ⭐[**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) | DoH   DoT | No | No | Based on server choice. Filter list being used can be found [here.](https://github.com/mullvad/dns-adblock) | [Yes](https://mullvad.net/en/blog/profiles-to-configure-our-encrypted-dns-on-apple-devices) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setup) | Cleartext   DoH/3   DoT | Anonymized | No | Based on server choice. | [No](https://community.cloudflare.com/t/requesting-1-1-1-1-signed-profiles-for-apple/571846) |
| [**Control D Free DNS**](https://controld.com/free-dns) | Cleartext   DoH/3   DoT   DoQ | No | No | Based on server choice. | [Yes](https://docs.controld.com/docs/macos-platform) |
| [**dns0.eu**](https://dns0.eu) | Cleartext   DoH/3   DoH   DoT   DoQ | Anonymized | Anonymized | Based on server choice. | [Yes](https://dns0.eu/zero.dns0.eu.mobileconfig) |
| [**Quad9**](https://quad9.net) | Cleartext   DoH   DoT   DNSCrypt | Anonymized | Optional | Based on server choice, malware blocking by default. | [Yes](https://quad9.net/news/blog/ios-mobile-provisioning-profiles) |

## Self-Hosted DNS Filtering
***
### Pi-hole

Pi-hole is an open-source [DNS-sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.

[Home](https://pi-hole.net/) <br>
[Docs](https://docs.pi-hole.net/)

***

### AdGuard Home

AdGuard Home is an open-source [DNS-sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

AdGuard Home features a polished web interface to view insights and manage blocked content.

[Home](https://adguard.com/adguard-home/overview.html) <br>
[Docs](https://github.com/AdguardTeam/AdGuardHome/wiki)