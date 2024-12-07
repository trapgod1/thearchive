# Discord Clients

## Windows
***
### Vencord (Easy)

[Download](https://vencord.dev/download/) - [Github](https://github.com/Vendicated/Vencord)

***

### BetterVencord (Hard) - [Github](https://github.com/Davilarek/Vencord)

#### How to Build BetterVendord
:::tabs

== Automated Install

PowerShell Script made by me <3 <br>
(right click, Save Link As... on the links to download)

[Download](https://raw.githubusercontent.com/trapgod1/thearchive/refs/heads/dev/docs/assets/bettervencord.ps1) - [Code](https://github.com/trapgod1/thearchive/blob/dev/docs/assets/bettervencord.ps1)

== Manual Install

<ins> Prerequisites </ins>
1. Install [Node.js](https://nodejs.org/en) or run `winget install OpenJS.NodeJS.LTS` in cmd
2. Install [pnpm](https://pnpm.io/installation) or run `npm install -g pnpm` in cmd
3. Install [Git](https://git-scm.com/downloads) or run `winget install Git.Git` in cmd

<ins> Building And Installation </ins>
1. `git clone https://github.com/Davilarek/Vencord.git`
2. `cd Vencord`
3. `pnpm install --frozen-lockfile`
4. `pnpm build`
5. `pnpm inject` 

:::

***

#### Recommended Plugins for BetterVencord
<ins> Prerequisites </ins>
1. `Settings -> Vencord -> Plugins`
2. Enable `BD Compatibility Layer`

<ins> Download Libraries </ins> <br>
(right click, Save Link As... on the links to download)
1. [0PluginLibrary](https://raw.githubusercontent.com/zerebos/BDPluginLibrary/refs/heads/master/release/0PluginLibrary.plugin.js) - Library required for BetterDiscord Plugins. [More info and source](https://github.com/zerebos/BDPluginLibrary)
2. [XenoLib](https://raw.githubusercontent.com/1Lighty/BetterDiscordPlugins/master/Plugins/1XenoLib.plugin.js) - Library required for BetterDiscord Plugins. [More info and source](https://github.com/1Lighty/BetterDiscordPlugins/)

<ins> Installing Libraries </ins>
1. `Settings -> Vencord -> Virtual Filesystem`
2. `import BD Plugin` and select the downloaded libraries

## Android

### Bunny 

[Download](https://github.com/pyoncord/BunnyManager/releases/latest) - [Github](https://github.com/pyoncord/Bunny)