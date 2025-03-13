# Learning Platform Dashboard

A React-based dashboard for an online learning platform featuring course browsing, video playback, and navigation.

## Features
- Responsive sidebar navigation
- Course filtering and search
- Language selection
- Course cards with ratings and details
- Video player with controls
- Detailed course information view

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation
1. Clone the repository:
```bash
git clone https://github.com/NirbhaySingh74/Learning-Platform-Dashboard.git
```

2. Install dependencies:

```bash
npm install
```

# or
```bash
yarn install
```

3. Start the development server:
```bash
npm run dev
```
# or

```bash
yarn run dev
```

The app will be running at http://localhost:5173 (default Vite port).

## Project Structure
```bash
public/
├── logo.svg
└── images/
    ├── course1.svg
    ├── course2.svg
    ├── course3.svg
    ├── course4.svg
    └── course5.svg
src/
├── components/
│   ├── Sidebar.tsx
│   ├── LanguageButton.tsx
│   ├── CourseCard.tsx
│   ├── VideoPlayer.tsx
│   ├── CourseFilter.tsx
│   ├── CourseList.tsx
│   └── CourseDetails.tsx
├── data/
│   └── courses.ts
├── App.css
├── App.tsx
├── index.css
├── main.tsx
```

## Dependencies
React,
React Icons,
Heroicons,
Tailwind CSS (assumed from class names),
Usage
