# Minecraft Launcher

:::danger This is Only for Java Edition
:::

## Prism Launcher

[Download](https://prismlauncher.org/) - [Github](https://github.com/PrismLauncher/PrismLauncher)

:::warning PrismLauncher does not allow you to create an offline account without having a Mojang / Microsoft account. <br> If you click the "Add Offline" button, you will be presented with an error. <br> It can be easily bypassed.
:::
***
### Automatic

1) Press the Windows key and choose any one of the following options:

    *  **Option 1**: Search for CMD and Run as administrator. 

    * **Option 2**: Search for Terminal and Run as administrator and then change it from Powershell to Command Prompt. 
2) Then paste one of the following:

:::tabs
== Method 1
```shell
echo {"accounts":[{"active":true,"entitlement":{"canPlayMinecraft":true,"ownsMinecraft":true},"profile":{"capes":[],"id":"0","name":"","skin":{"id":"","url":"","variant":""}},"type":"Offline","ygg":{"extra":{"clientToken":"0","userName":""},"iat":0,"token":"0"}}],"formatVersion":3} > "%appdata%/PrismLauncher/accounts.json"
```
== Method 2
```shell
echo {"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3} > %appdata%/PrismLauncher/accounts.json
```
:::

3) Launch Prism Launcher, click on the top right button which displays "No profile (\<Offline>)" and you will notice a new offline profile has appeared. 
4) Click on the Add Offline button, type in your username you want and Enjoy playing Minecraft without Mojang or Microsoft accounts, using PrismLauncher or even MultiMC and its forks.

***
### Manual

1) Go to PrismLauncher's directory by pressing `Win + R` and then pasting `%AppData%/PrismLauncher`.
2) Choose any one of the following options:

    * **Option 1**: Download the [`accounts.json`](https://gist.github.com/FMHYHelper/329a2453797b36438ff47f3d7f9a6c9b) file and move it to the folder. (*Hint: click on `accounts.json` to download the file* (⌒‿⌒) ) 

    * **Option 2**: Create a new file named accounts.json in the PrismLauncher folder and open it with your preferred text editor. Paste the following line into the file and save it.: 
:::tabs
== Method 1
```json
{
    "accounts": [
        {
            "active": true,
            "entitlement": {
                "canPlayMinecraft": true,
                "ownsMinecraft": true
            },
            "profile": {
                "capes": [
                ],
                "id": "0",
                "name": "",
                "skin": {
                    "id": "",
                    "url": "",
                    "variant": ""
                }
            },
            "type": "Offline",
            "ygg": {
                "extra": {
                    "clientToken": "0",
                    "userName": ""
                },
                "iat": 0,
                "token": "0"
            }
        }
    ],
    "formatVersion": 3
}
``` 
== Method 2
```json
{
  "accounts": [
    {
      "entitlement": {
        "canPlayMinecraft": true,
        "ownsMinecraft": true
      },
      "type": "MSA"
    }
  ],
  "formatVersion": 3
}

``` 
:::

3) Launch Prism Launcher, click on the top right button which displays "No profile (\<Offline>)" and you will notice a new offline profile has appeared. 
4) Click on the Add Offline button, type in your username you want and Enjoy playing Minecraft without Mojang or Microsoft accounts, using PrismLauncher or even MultiMC and its forks.