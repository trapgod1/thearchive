# So, you want to debloat Windows?

## Welcome to the world of scams, placebo scripts, awful software, and all sorts of other bullshittery. 
Those in the automotive or engineering industry may recognize the common proverb "The best part is no part." I, and many others who contribute to this document, believe that the same applies to software. The best program is no program. 
Any tool you find on the internet that claims to increase performance with the click of a button is either lying or will relentlessly butcher your system. No program will ever be as flexible as the human mind. Understanding your computer and its needs will lead to you maintaining a much healthier software environment. A slight performance increase will just be a side effect of the massive improvements you will make to your system. 

If you are searching for performance, you will find it much more effective to upgrade your hardware. However, that is not possible for many people. I believe this is why people turn to destructive software modifications.

This document aims to be a comprehensive guide about how to get the best out of Windows, while dodging Microsoft's scummy tracking and advertising practices, and malware ridden all-in-one debloating scripts. 

*made with <3 by Lyssa and Infradragon* <br>
*edited by Trap :)*

## **Choosing your Operating System**

The first and most impactful choice you will make is whether or not to install another operating system rather than keeping whatever operating system you currently have. Installing another operating system will overwrite anything currently on your computer, so you need to back up any important data stored on your computer to another device before proceeding with an installation. 

::: warning Please reinstall first.
It is highly recommended that you install a new copy of an operating system because you will reset your computer to a known working state. <br>
If you skip this, proceed to the modifications listed later in this document, and encounter errors, it is almost guaranteed to be because your system was already broken. <br> 
Reinstalling now will save you pain later.
:::

There are three operating systems we will focus on in this section, for three different levels of hardware.
Windows 10 Enterprise LTSC 2021, Windows 11 Enterprise LTSC 2024 and Windows 10 Enterprise LTSC 2019.



### Windows 10 Enterprise LTSC 2021
**Recommended for mid-range hardware.**

There are four big upsides to using the Long Term Support Channel (LTSC). 
1. The only program that could be considered "bloat" that comes preinstalled is Microsoft Edge, which we will tell you how to remove later in this guide. 
2. You will receive important security updates to Windows for far longer than you would when using consumer editions. Windows 10 IoT LTSC 2021 (the latest and last LTSC release of Windows 10) will be supported until 2032, whereas consumer Windows 10 will only be supported until 2025.
3. Windows LTSC editions come without the Microsoft Store. However, if you need it, it can be easily installed at any time by typing `wsreset -i` into an administrator command prompt.
4. You can completely disable Windows telemetry without making drastic modifications to your system.

Windows 10 LTSC has only two editions: Enterprise, and IoT Enterprise. The differences between these are minimal, but the IoT version is available in arm64. You can read more about the differences [here](https://massgrave.dev/windows_ltsc_links.html#Notes).

This operating system is recommended for most people because it maintains compatibility with all Windows programs that run on Windows 10 while staying light and stable. It is a great place to start.



### Windows 11 Enterprise LTSC 2024 
**Recommended for people who specifically need the features available in Windows 11.**

Windows 11 Enterprise LTSC includes the ability to easily disable telemetry, like all other enterprise editions.
:::danger Warning
 Windows 11 LTSC 2024 is based on Windows 24h2, and so is not available for 32 bit systems or for CPUs that do not support the SSE4.2 instruction set. **There is no workaround for this.** You can check your CPU compatibility by searching for it [here.](https://www.cpu-world.com/CPUs/CPU.html)
:::
The only use case for this operating system right now is if you have very new hardware, or if you like the look of Windows 11. Newer generation (12th gen and up, depending on the model) asymmetric Intel CPUs with separate E cores and P cores have some slight performance improvements on the newer Windows 11 kernel because the CPU scheduler has been changed to better support asymmetrical Intel CPU topologies.

### Windows 10 Enterprise LTSC 2019
**Recommended for low end hardware if Windows is a requirement.**

This older build in the LTSC performs a bit better on older hardware, and it will remain in support until 2029.

It includes all the other benefits of 2021 LTSC.



## **Installing your Operating System**
This next part will require a bit of effort.
It may take a beginner a day or more.

### Preparing Installation Media
You do not need to perform these steps on the computer you are going to install to. You can do this on a friend's computer and then take the USB with the installation media to the computer you will install to, if it is easier.

First, you will need to get a USB drive with enough total space to fit the ISO you are using. Try to find a USB that has at least 7 GB of space, as that should fit most ISOs you may encounter. Keep in mind that when we use Rufus later, your USB will be wiped just like your computer, so back up any important data on the USB.
You will also need to download an ISO image of the operating system you chose.

All Windows ISOs I have mentioned are not available to the public, they require an MVS Enterprise subscription to obtain. However, the kind folks over at MASSGRAVE have provided a public mirror at [massgrave.dev](https://massgrave.dev/genuine-installation-media)
Get x64, x86, or arm64 depending on your CPU's architecture.
- [Windows 11 LTSC 2024 x64, arm64](https://massgrave.dev/windows_ltsc_links#win11-iot-enterprise-ltsc-2024)
- [Windows 10 LTSC 2019/2021 x86, x64, arm64](https://massgrave.dev/windows_ltsc_links.html#Win10_Iot_Enterprise_LTSC_2021)

Next, you will need to download a handy program called Rufus. We will use it to write the ISO to your USB.
Go to [this page](https://rufus.ie/) and download the file named `rufus-#.#p.exe`, or the x86 one if you need that. 

Finally, plug your USB into the fastest USB port available. It's okay if you don't know which port to use, it may just make this next step take a little longer.

Once your ISO file has downloaded, you may open Rufus.
You will need to select the USB drive you wish to use in the Device dropdown, and then click the “SELECT” button and select the ISO file you downloaded.
If your motherboard does not support UEFI, you will have to select BIOS under “Target System”
Leave everything else at its default.
Now you can click “Start.”
Depending on the ISO you are using, a few things may happen.
- If you are using a Linux ISO, there will only be a few confirmation dialogs.
- If you are using a Windows 10 ISO, you will get a “Windows User Experience” dialog. You can check whichever boxes sound useful to you, as they all just automate the setup process in various ways. You won't miss anything by *not* checking any of the boxes, so if you are unsure, just leave it unchecked and do it manually during Windows setup.
- If you are using a Windows 11 ISO, you will get the same dialog with all the options from the Windows 10 ISO, with the addition of two options to bypass the RAM and TPM requirements introduced in Windows 11. If your computer does not meet those requirements, I recommend you leave those two checked.

Now the ISO will start being written to the USB. Put on a YouTube video, because this can take anywhere from a minute to an hour, depending on the speed of the USB drive and USB port.

If the progress bar turns red and stops midway through writing, it is because your USB's NAND flash is worn or is very low quality, and is not writing properly. This generally only happens with very cheap or very old USBs. I recommend you throw away the USB and get a different one, because that USB has a chance of corrupting data transferred to or from it.

### Using your Installation Media
You will now need to perform some techno wizardry. 

Plug your installation USB into the computer you want to install your operating system to.
Look up what key you need to press during startup to get into your computer's BIOS. It's different for every manufacturer, but it's usually one of the function keys or the delete key.

Restart your computer and spam the key your device uses as it turns on, and you should be put into the BIOS instead of your operating system.

You can either change your boot order, or perform a one-time boot.

The one-time boot key is different for every manufacturer but is commonly displayed under the boot logo after or during the POST. When you enter the one-time boot menu, select your USB drive and press enter.

If your computer does not allow you to perform a one-time boot, or you cannot find the key, you can also change the boot order. It is typically in a tab at the top of the BIOS configuration menu labeled boot. Again, it's different for every manufacturer, so there are no perfect universal instructions for this. 
Once you have found the boot order, move the USB drive to the top, so that your computer will boot from USB before your internal storage.
Save and exit the BIOS, and your computer should reboot once again, into the installation media on your USB.

From here, the instructions will differ depending on what operating system you chose.
Linux Mint's installer is pretty self-explanatory.

On Windows 10 and 11 LTSC, you should select “I don't have a product key,” then select the IoT edition (if available), then you can clear out the partitions on the drive you want to install to, so that the drive just says "Unallocated space."
To use a local account, you have to select “domain join” in the bottom left when it asks you to sign in to a Microsoft account.
If you didn't click the “Skip privacy options” checkbox in Rufus, I recommend you turn off all the switches on the data collection screen. All of them are to collect consent for Microsoft to gather and sell your data.


## Modifying your Windows Installation
If you installed an edition in the LTSC, there's not much left to change. The only things you should do is activate Windows, disable telemetry, and remove Microsoft Edge. If you installed an edition in the GAC, then you may need to remove a lot of appx packages as well.

## Activating Windows
The easiest way to activate Windows is using the Microsoft Activation Scripts tool. You can find it the source [here.](https://massgrave.dev/#Download__How_to_use_it) As some would say, it's trivial.

-   Right-click on the Windows start menu and select PowerShell or Terminal (Not CMD).
-   Copy and paste the code below and press enter  
```
irm https://get.activated.win | iex
```
-   You will see the activation options. Follow the on-screen instructions.
-   That's all.

:::tip
- On older Windows builds you may need to run the below command before,  `[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12`  
- The Powershell method does not work on Windows 7. Use the Method 2 - Traditional instead.  
- The URL get.activated.win may be blocked by some DNS services because it is a new domain.
:::

## Disabling Windows Telemetry
If you followed the guide and installed an enterprise edition, this option should be available to you.
Press Windows+R, type `gpedit.msc`, and press enter.
In the window that opens, navigate to `Computer Configuration > Administrative Templates > Windows Components > Data Collection and Preview Builds`, double click “[Allow Telemetry](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.DataCollection::AllowTelemetry),” and set it to “0 - Security”
On Windows 11, it will be called "[Allow Diagnostic Data](https://admx.help/?Category=Windows_11_2022&Policy=Microsoft.Policies.DataCollection::AllowTelemetry)"
For those of you who are so exceptionally paranoid as to want complete network silence, read [this thread.](https://forums.mydigitallife.net/threads/repo-windows-10-telemetry-repository.63874/)

## Removing Microsoft Edge
EW! Microsoft Edge??

It's fairly easy to remove, because a very smart person made a script. 
**Make sure Windows is updated first, or else it may come back with the pending updates.**
Copy (CTRL+A, CTRL+C) the script from [here.](https://gist.githubusercontent.com/ave9858/c3451d9f452389ac7607c99d45edecc6/raw/UninstallEdge.ps1)
Paste this script into Wndows Powershell as administrator, paste (SHIFT+INSERT) it into the window, and press enter.

## Remove WebView2?
Many programs require WebView2 to function, and include WebView in their installers. Even if you're on LTSC (which doesnt come with WebView), a program will likely install it anyways. We hate it as much as the next person, but if a program you use requires WebView, then removing it will likely break the program.
WebView2 does not tend to run in the background so there is no performance advantage to removing it.

## Removing Appx Packages
You can remove default apps very easily using Windows Powershell's appx cmdlets.
The following instructions will need to be performed in an administrator Windows Powershell window.

To see the list of installed apps, type `Get-AppxPackage -AllUsers | Select Name` into an administrator powershell and press enter.
To remove any of the apps you see there, you can use the `Get-AppxPackage [NAME] | Remove-AppxPackage` command.
Replace `[NAME]` with the package you wish to remove.
The name supports using wildcards (`*`) to select packages.

For example, to remove the photo viewer, you can run `Get-AppxPackage *Photos* | Remove-AppxPackage`

## Installing Drivers
It's best to do this manually. **Always get drivers from the part manufacturer's website.**
The main components you should get drivers for is your GPU and your Motherboard (more specifically, the various chipsets and components on your motherboard).
The model numbers for both your GPU and Motherboard can be found in the "System Information" app on Windows.
The motherboard will be called a "Baseboard."
The GPU will be called a "Display Adapter."
Once you find either of those, just search the internet for your drivers.

## Using Winget Package Manager
A package manager is a centralized repository of software, like app stores, or Linux package managers. The main benefit is that you can upgrade all of your software at once, and you have less of a chance of downloading a fake version of the software you're trying to install.
Package managers are already standard practice on Linux, while on Windows, you have to manually check each application that doesn't have its own auto-update feature.

However, Windows *does* have an official and widely used package manager, [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/).
:::danger **If you are using the LTSC, you MUST first install the Microsoft store, as winget is only installable as a .msixbundle, which requires the Microsoft store.** While winget supports Microsoft Store packages, it is NOT just a terminal interface for the Microsoft store, and provides many more packages.
:::
You can install the Microsoft Store on the LTSC by running `wsreset -i` in a command prompt as administrator.
You can then install winget from the Microsoft store [here](https://apps.microsoft.com/detail/9nblggh4nns1?hl=en-us&gl=US#activetab=pivot:overviewtab)

Winget is a CLI (Command Line Interface) application. 
You can use it in a command prompt or PowerShell window (PowerShell is preferred)
To search for an application, run `winget search [Search Query]`
To install an application, run `winget install [Package Name]`
To uninstall an application, run `winget uninstall [Package Name]`
To update an application, run `winget update [Package Name]`, or alternatively, run `winget update --all` to update every application.
Package names are case sensitive and must be typed out completely. In PowerShell, you can select the name to copy it and paste it with right click.
There is also a GUI available to search for applications and generate install commands at [winget.run](https://winget.run/)

## Installing Extra Media Codecs
The Windows media codecs are libraries required by some apps to play newer audio and video formats.
They are available through the Microsoft Store, installable on LTSC via the command `wsreset -i`in an administrator command prompt.
There are eight of them in total, one of which is paid, but can be installed for free by downloading it from [massgrave.dev](https://massgrave.dev).

* [HEVC Video Extensions](https://massgrave.dev/unsupported_products_activation#hevc-video-extensions) (pirated copy on massgrave) (.hevc .heic .heics) <br>
* [VP9 Video Extensions](ms-windows-store://pdp/?ProductId=9n4d0msmp0pt&mode=mini) (.webm .mkv .ivf) <br>
* [AV1 Video Extension](ms-windows-store://pdp/?ProductId=9mvzqvxjbq9v&mode=mini) (.webm .mkv .avif .3gp .3gpp) <br>
* [MPEG-2 Video Extension](ms-windows-store://pdp/?ProductId=9n95q1zzpmh4&mode=mini) (.mpeg .mpg .ts .ts .tsv .tsa .m2t .m2ts .MTS .mkv .avi .m2v .mp2 .mp3) <br>
* [HEIF Image Extensions](ms-windows-store://pdp/?ProductId=9pmmsr1cgpwg&mode=mini) (.heif .heifs .HIF) <br>
* [WEBP Image Extensions](ms-windows-store://pdp/?ProductId=9pg2dk419drg&mode=mini) (.webp) <br>
* [Raw Image Extensions](ms-windows-store://pdp/?ProductId=9nctdw2w1bh8&mode=mini) (.raw .dng and [others](https://www.libraw.org/supported-cameras)) <br>
* [Web Media Extensions](ms-windows-store://pdp/?ProductId=9n5tdp8vcmhs&mode=mini) (.mkv .mka .ogg .ogv .oga .ogx .ogm .spx) <br>

If you have accidentally installed an N or KN edition of Windows, then you are missing **all** media codecs and should additionally install the Media Feature Pack by navigating to Settings > Apps > Apps & Features > Optional Features > Add a feature > Media Feature Pack