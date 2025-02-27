# Unattended Windows Installation
This lets you create [answer files](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/update-windows-settings-and-scripts-create-your-own-answer-file-sxs) (typically named `unattend.xml` or `autounattend.xml`) to perform unattended installations of both Windows 10 and Windows 11.

## Generate Your Unattend.xml File

[Generator](https://schneegans.de/windows/unattend-generator/) - [Github](https://github.com/cschneegans/unattend-generator/)

## How to Use

1. Download the lastest version of the iso you are using from the [Microsoft Website](https://www.microsoft.com/en-us/software-download/windows11) and mount it.
2. Download the `unattend.xml` file from the generator.
3. Copy the `unattend.xml` file to the root of the mounted iso.