# Lan Multiplayer

## ZeroTier

ZeroTier is a service that allows you to create a virtual LAN network over the internet. This is useful for playing LAN games with friends over the internet. 
Here's how to set it up:
1. Go to [ZeroTier's website](https://www.zerotier.com/) and create an account.
2. Install the ZeroTier client on your computer.
3. On the ZeroTier website click on "Networks" and create a new network.
4. Click on the network you just created and copy the network ID.
5. On the ZeroTier client click on "Join Network" and paste the network ID.
:::tabs
==Windows 10
6. If you are on Windows 10 it will prompt for Public/Private network (Windows Firewall setting) , Press Yes
==Windows 11
   6. If you are on Windows 11 it will not prompt for Public/Private network (Windows Firewall setting), you will have to manually set it. <br>

      A. Open PowerShell as Administrator <br>
   B . Run the following command to set the network to Private <br>
   ```shell
   Get-NetConnectionProfile | Where-Object "InterfaceAlias" -like "Zero*" | Set-NetConnectionProfile -NetworkCategory Private
   ```
   C. Run the following command to set the network to Check if the network is set to Private
   ```shell
   Get-NetConnectionProfile | Where-Object "InterfaceAlias" -like "Zero*"
   ```
:::
7. You should now be connected to the network. You can now share the network ID with your friends so they can join the network as well.

