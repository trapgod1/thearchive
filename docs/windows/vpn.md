# VPN
:::tip
For torrenting, it's recommended to use a paid rather than free VPN. Free VPNs are only really useful for things like viewing sites blocked by your ISP / country.
:::

## [ProtonVPN](https://protonvpn.com/) - Free/Paid
:::warning
No Torrenting with Free Version
:::

## [Mullvad](https://mullvad.net/en) - Paid
[No Logging](https://mullvad.net/en/blog/2023/4/20/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised/) <br>
[Port Warning](https://mullvad.net/en/blog/2023/5/29/removing-the-support-for-forwarded-ports/)

## [Warp](https://one.one.one.one/) - Free
:::danger DO NOT TORRENT ON FREE VPN's
:::

## **Attention all Cloudflare WARP users**

![warp](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1.1.1.1_logo.png/180px-1.1.1.1_logo.png)

**The official Cloudflare WARP client collects and reads your device's hardware identifier (HWID) which can result in a permanent ban if it detects a suspicious amount of WARP+ storage usage.**

This means that if your device is flagged for having too much WARP+ storage, you may never be able to use Cloudflare WARP again. 

To avoid this, it is **highly recommended to use the alternative solution, `WGCF`, instead**. `WGCF` is a safe and reliable way to access and use the Cloudflare WARP service without having to worry about the consequences of a potential hardware ban. 

Act now to ensure your continued access to Cloudflare WARP.

:::info **Make sure you have WireGuard Installed!**
Download **`WireGuard`** [here](https://www.wireguard.com/install/).
:::

### Here's a guide on how to setup **WGCF**:
1. Download the latest release of **`WGCF`** from [here](https://github.com/ViRb3/wgcf/releases). Save it to your default "Downloads" folder.
2. Rename the downloaded file to "`wgcf`"
3. Open the `Command Prompt` (CMD).
4. Change the directory to your Downloads folder by running this command: `cd %userprofile%/Downloads`
5. Run the command "`wgcf register`"
6. Run the command "`wgcf generate`"
7. You should now have two new files: "`wgcf-profile.conf`" and "`wgcf-account.toml`".
8. Open up your Cloudflare WARP app and go to the Account settings.
9. Copy your account key
10. open the "`wgcf-account.toml`" file with Notepad and replace the "`license_key`" field with the key you just copied.
11. Run the command "`wgcf update`" in CMD.
12. Run the command "`wgcf generate`" again.
13. Run the command "`wgcf status`" to check your account information.
14. Run the command "`wgcf trace`" to check the status of your WARP.
15. Import the "`wgcf-profile.conf`" file to your `WireGuard` client and activate it.
16. You can now copy the "`wgcf-profile.conf`" file to any device and use WARP+ on any device that supports `WireGuard`.