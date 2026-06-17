# 🐾 Snoopy's Waiting Room

> A calm place between appointments.

A private family web app built with love for navigating breast cancer appointments with less anxiety and more comfort.

---

## What's Inside

| Page | What it does |
|------|-------------|
| **Home** | Hero message, journey timeline, encouragement, Snoopy corner |
| **Appointment Prep** | Countdown to Tuesday + bring-list checklist |
| **Questions** | Oncology question builder with print support |
| **Biomarker Explorer** | Flip-card explanations of ER, PR, HER2, Ki-67, BRCA, Oncotype DX |
| **Insurance Kit** | Coverage checklist, questions to ask, financial resources |

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
```

Open http://localhost:5173

---

## Deploy to GitHub Pages

**One-time setup:**

1. Create a GitHub repo named `snoopys-waiting-room`
2. In `package.json`, replace `YOUR-USERNAME` with your GitHub username
3. Push your code to `main`

**Deploy:**

```bash
npm run deploy
```

Your site will be live at:
`https://YOUR-USERNAME.github.io/snoopys-waiting-room`

---

## Add Cozy Sounds

The audio player looks for files in `/public/audio/`. Add any of these:

```
public/audio/rain.mp3
public/audio/fireplace.mp3
public/audio/coffee-shop.mp3
public/audio/piano.mp3
public/audio/lofi.mp3
```

Free sources: [Freesound.org](https://freesound.org) · [Pixabay](https://pixabay.com/music/)

---

## Update the Appointment Date

In `src/components/Countdown.jsx`, change this line:

```js
const APPOINTMENT_DATE = new Date("2026-06-23T09:00:00");
```

---

## Built With

- React + Vite
- React Router (HashRouter for GitHub Pages)
- Gruvbox-inspired "Sunflower Autumn" color palette
- Press Start 2P + Nunito fonts
- Giphy embeds for Snoopy corner
- No backend — everything runs in the browser

---

*Built with love. You've got this. 🌻*
