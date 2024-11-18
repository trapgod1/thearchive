# Windows And Office Activation

## Microsoft Activation Scripts (MAS)

A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.

The easiest way to activate Windows is using the Microsoft Activation Scripts tool. You can find it the source [here](https://massgrave.dev/#Download__How_to_use_it) and the code [here.](https://github.com/massgravel/Microsoft-Activation-Scripts)

## Download / How to use it?

### Method 1 - PowerShell (Recommended)

-   Right-click on the Windows start menu and select PowerShell or Terminal (Not CMD).
-   Copy and paste the code below and press enter  
```
irm https://get.activated.win | iex
```
-   You will see the activation options. Follow the on-screen instructions.
-   That's all.
:::tip
- On older Windows builds you may need to run the below command before,  
`[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12`  
- The Powershell method does not work on Windows 7. Use the Method 2 - Traditional instead.  
- The URL get.activated.win may be blocked by some DNS services because it is a new domain.
:::

### Method 2 - Traditional

-   Download the file under the code button from [GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) or [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts)
-   Right-click on the downloaded zip file and extract
-   In the extracted folder, find the folder named `All-In-One-Version`
-   Run the file named `MAS_AIO-CRC32_XXXXXXXX.cmd`
-   You will see the activation options, follow the on-screen instructions.
-   That's all.

To run the scripts in unattended mode, check [here](https://massgrave.dev/command_line_switches)