function Install-NodeJS {
    Write-Host "Checking if Node.js is installed..."
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Host "Node.js not found, installing via winget..."
        winget install OpenJS.NodeJS.LTS
    } else {
        Write-Host "Node.js is already installed."
    }
}

function Install-pnpm {
    Write-Host "Checking if pnpm is installed..."
    if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
        Write-Host "pnpm not found, installing..."
        npm install -g pnpm
    } else {
        Write-Host "pnpm is already installed."
    }
}

function Install-Git {
    Write-Host "Checking if Git is installed..."
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Write-Host "Git not found, installing via winget..."
        winget install Git.Git
    } else {
        Write-Host "Git is already installed."
    }
}

function Install-Discord {
    Write-Host "Checking if Discord is installed..."
    if (-not (Get-Command discord -ErrorAction SilentlyContinue)) {
        Write-Host "Discord not found, installing via winget..."
        winget install Discord.Discord
    } else {
        Write-Host "Discord is already installed."
    }
}

function Close-DiscordProcesses {
    Write-Host "Checking if any Discord processes are running..."
    $discordProcesses = Get-Process -Name discord -ErrorAction SilentlyContinue
    if ($discordProcesses) {
        Write-Host "Discord processes found. Closing Discord..."
        $discordProcesses | ForEach-Object { Stop-Process -Id $_.Id -Force }
        Write-Host "Discord processes closed."
    } else {
        Write-Host "No Discord processes running."
    }
}

function Build-Vencord {
    $repoPath = "Vencord"

    if (Test-Path -Path $repoPath) {
        Write-Host "Vencord repository already exists. Fetching latest changes..."
        Set-Location -Path $repoPath
        git fetch origin
        Write-Host "Fetched latest changes from the remote repository."
    } else {
        Write-Host "Cloning the Vencord repository..."
        git clone https://github.com/Davilarek/Vencord.git
        Set-Location -Path $repoPath
    }

    Write-Host "Installing dependencies..."
    pnpm install --frozen-lockfile

    Write-Host "Building the project..."
    pnpm build

    Write-Host "Injecting..."
    pnpm inject

    Write-Host "Build and installation complete!"
}

Install-NodeJS
Install-pnpm
Install-Git
Install-Discord
Close-DiscordProcesses
Build-Vencord