


# **NOTHING (R) OS — Developer Portfolio**

A futuristic **operating-system style developer portfolio**, inspired by *Nothing OS*.
Features animated system widgets, real-time GitHub metrics, a full boot sequence, command palette, and a minimal black-and-red interface.

---

### **Nothing-OS Inspired UI**

* CRT scanlines
* Dotted-grid background
* Animated boot screen
* System LEDs
* Minimal black/red aesthetic
* Zero-chrome cards

### **Real-Time Widgets**

* Developer Monitor (commits, PRs, hours)
* Tech Radar with animated skill bars
* Deploy Pipeline Log
* Commit Stream
* LeetCode Stats
* Starred repos & GitHub activity

### **Hidden Engineer Mode (Konami Code)**

```
↑ ↑ ↓ ↓ ← → ← → B A
```

Enables:

* RedMode theme
* Pulsing LEDs
* Enhanced animation states

### **Command Palette (CMD/CTRL + K)**

Quick navigation:

* Open sections
* Toggle modes
* Trigger system actions

### **Resume Trigger**

Simulated “GET_RESUME” action with command-style feedback.

---

## Tech Stack

* React 18
* Vite
* TailwindCSS
* Lucide React Icons
* Custom Hooks
* GitHub + LeetCode integrations

---

## Project Structure

```

src/
├── assets/
├── components/
│     ├── boot/
│     │    └── Bootscreen.jsx
│     ├── cmd/
│     │    └── CmdPalette.jsx
│     ├── header/
│     │    ├── Header.jsx
│     │    └── TimeWidget.jsx
│     ├── modals/
│     │    └── ProjectModal.jsx
│     ├── navigation/
│     │    └── BottomNav.jsx
│     ├── sections/
│     │    ├── Dashboard.jsx
│     │    ├── Firmware.jsx
│     │    ├── Logs.jsx
│     │    ├── Repositories.jsx
│     │    └── Shipments.jsx
│     ├── ui/
│     │    ├── Card.jsx
│     │    ├── DottedBg.jsx
│     │    ├── Loading.jsx
│     │    ├── Scanline.jsx
│     │    └── ScrambleText.jsx
│     └── widgets/
│           ├── DeployStream.jsx
│           ├── DeveloperMonitor.jsx
│           ├── LeetCodeWidget.jsx
│           ├── Matrix.jsx
│           ├── StarredRepos.jsx
│           └── TechRadar.jsx
├── context/
│     └── ViewContext.jsx
├── data/
│     ├── firmware.js
│     ├── identity.js
│     ├── logs.js
│     ├── projects.js
│     └── sections.js
├── hooks/
│     ├── useAsync.js
│     ├── useKonami.js
│     └── useSystemMonitor.js
├── utils/
│     ├── cache.js
│     ├── github.js
│     └── leetcode.js
├── App.jsx
├── index.css
└── main.jsx

```

---

## Environment Variables

Create `.env`:

```
VITE_GITHUB_TOKEN=your_token
VITE_GITHUB_USERNAME=Muhammed-Rizin
VITE_WORK_USERNAME=rizin-srv
```

### .env.example`

```
VITE_GITHUB_USERNAME=
VITE_GITHUB_TOKEN=
VITE_WORK_USERNAME=
```

---

## Hotkeys

| Action          | Shortcut     |
| --------------- | ------------ |
| Command Palette | CMD/CTRL + K |
| Engineer Mode   | Konami Code  |

---

## Design Principles

* Minimal UI, maximum functionality
* No external animation libraries
* Lightweight state management
* Modular, reusable widgets
* Built for real developer portfolios

---

## Konami Code

```jsx
const konami = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"
];
```

Toggle RedMode:

```jsx
setRedMode((prev) => !prev);
```

---

## Getting Started

```sh
git clone https://github.com/Muhammed-Rizin/portfolio
cd portfolio
npm install
npm run dev
```

---

## Ideal Use Cases

* Developer portfolio
* Personal dashboard
* GitHub activity visualizer
* Nothing OS–styled landing page
* Hackathon / demo projects

---

## Author

**Muhammed Rizin**
Full-Stack Engineer — React, Angular, Node, Express, AWS, High-Performance Web Systems.

---
