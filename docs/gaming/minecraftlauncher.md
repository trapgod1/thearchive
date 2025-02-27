# Minecraft Launcher

:::danger This is Only for Java Edition
:::

## Prism Launcher

[Download](https://prismlauncher.org/) - [Github](https://github.com/PrismLauncher/PrismLauncher)

:::warning PrismLauncher does not allow you to create an offline account without having a Mojang / Microsoft account. <br> If you click the "Add Offline" button, you will be presented with an error. <br> It can be easily bypassed.
:::

:::tabs
==Automatic

1) Search for CMD and Run as administrator.
2) Then paste one of the following:

```shell
echo {"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3} > %appdata%/PrismLauncher/accounts.json
```

3) Launch Prism Launcher, click on the top right button which displays "No profile (Xbox profile missing)" and you will notice a new offline profile has appeared. 
4) Click on the Add Offline button, type in your username you want and Enjoy playing Minecraft without Mojang or Microsoft accounts, using PrismLauncher or even MultiMC and its forks.

==Manual

1) Go to PrismLauncher's directory by pressing `Win + R` and then pasting `%AppData%/PrismLauncher`.
2) Create a new file named accounts.json in the PrismLauncher folder and open it with your preferred text editor. Paste the following line into the file and save it.: 

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

3) Launch Prism Launcher, click on the top right button which displays "No profile (\<Offline>)" and you will notice a new offline profile has appeared. 
4) Click on the Add Offline button, type in your username you want and Enjoy playing Minecraft without Mojang or Microsoft accounts, using PrismLauncher or even MultiMC and its forks.

:::