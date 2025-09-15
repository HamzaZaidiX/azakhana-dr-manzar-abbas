# Azakhana Dr. Manzar Abbas | عزاخانہ ڈاکٹر منظر عباس
 
## Project info
یہ ویب سائٹ عزاخانہ ڈاکٹر منظر عباس کے لیے بنائی گئی ہے، جو کہ سنہ 1952 سے قائم عزاخانہ ہے جس کی بنیاد ڈاکٹر سید منظر عباس زیدی صاحب نے رکھی۔ اس عزاخانہ کو انہی کے نام سے منسوب کر دیا گیا ہے۔ اس عزاخانہ میں گزشتہ 70 سال سے مجالسِ عزا کا سلسلہ جاری ہے۔
## Table of Contents
 
**Website URL**: -

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [License](#license)
 
## How can I edit this code?
## Introduction
 
There are several ways of editing your application.
This project is a modern web application for "Azakhana Manzar Abbas," built to provide information, share videos, prayer times, and facilitate communication. It features a responsive design, theme toggling, and integration with the YouTube API for video content.
 
## Features
 
-   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
-   **Video Section:** Displays YouTube videos fetched from a specific channel.
-   **Prayer Times Widget:** (Assumed based on `PrayerTimesWidget.tsx`)
-   **Theme Toggle:** Light and Dark mode functionality.
-   **Contact Form:** (Assumed based on `ContactSection.tsx`)
-   **Event Listings:** (Assumed based on `EventsSection.tsx`)
-   **About Section:** Information about Azakhana Manzar Abbas.
-   **Social Media Links:** (Assumed based on `SocialSection.tsx`)
 
## Screenshots

Follow these steps:
## Technologies Used
 
```sh
# Step 1: Clone the repository using the project's Git URL.
git clone "https://github.com/HamzaZaidiX/azakhana-dr-manzar-abbas"
-   **Frontend Framework:** React.js
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** Shadcn/ui
-   **Icons:** Lucide React
-   **API Integration:** YouTube Data API v3
 
# Step 2: Navigate to the project directory.
cd azakhana-manzar-abbas
```
## Project Structure
 
# Step 3: Install the necessary dependencies.
npm i
```
.
├── public/                 # Static assets (images, favicon, fonts)
├── src/                    # Source code
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point for React app
│   ├── index.css           # Global styles
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ... (other components like AboutSection, ContactSection, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── pages/              # Page-level components
│       ├── Index.tsx
│       └── NotFound.tsx
├── .env                    # Environment variables (local)
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```
 
# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js
-   npm, yarn (your preferred package manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HamzaZaidiX/azakhana-dr-manzar-abbas.git
    cd azakhana-manzar-abbas
     ```
2.  **Install dependencies:**
    ```bash
    # Using npm
    npm install

This project is built with:
### Running the Development Server
 
 - Vite
 - TypeScript
 - React
 - shadcn-ui
 - Tailwind CSS
To start the development server:
```bash
# Using npm
npm run dev
 
Simply open [React JS Docs](https://react.dev/learn/installation) and check out documentation.
# Using yarn
yarn dev
 
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. *(If you have a LICENSE file, otherwise specify your chosen license or remove this section.)*

