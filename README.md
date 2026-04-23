# AudioLog

A full-stack web application for logging and reviewing audio content, built with **ASP.NET Core MVC** on **.NET 10**.

## Overview

AudioLog provides a clean interface for tracking and managing audio reviews. The app follows the MVC pattern with a dedicated `ReviewController` exposing full CRUD operations — Create, Read, Update, and Delete — for audio log entries.

## Tech Stack

![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core_MVC-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![.NET 10](https://img.shields.io/badge/.NET_10-512BD4?style=flat-square&logo=dotnet&logoColor=white)

## Project Structure

```
AudioLog/
├── Controllers/
│   ├── HomeController.cs       # Landing page routing
│   └── ReviewController.cs     # CRUD operations for audio reviews
├── Models/
│   └── ErrorViewModel.cs       # Error handling model
├── Views/
│   ├── Home/                   # Home page views
│   ├── Review/                 # Review CRUD views (Create, Read, Update, Delete)
│   └── Shared/                 # Shared layout and partials
├── wwwroot/                    # Static assets (CSS, JS)
├── Program.cs                  # App entry point and middleware pipeline
└── AudioLog.csproj             # Project configuration (.NET 10)
```

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)

### Run Locally

```bash
git clone https://github.com/usffish/AudioLog.git
cd AudioLog
dotnet run
```

The app will be available at `https://localhost:5001` (or the port shown in your terminal).

## Features

- **Create** — Log a new audio review entry
- **Read** — Browse and view existing audio logs
- **Update** — Edit and update a review
- **Delete** — Remove a log entry

## Author

**Ismail Jhaveri** — [LinkedIn](https://www.linkedin.com/in/ismail-jhaveri-2021/) · [ismailj@usf.edu](mailto:ismailj@usf.edu)
