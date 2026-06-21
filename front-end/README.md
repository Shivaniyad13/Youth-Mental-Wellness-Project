# Youth Mental Wellness Project

A student-focused web application designed to support mental wellness, study planning, and productivity. This project combines self-care features, mood tracking, journaling, learning resources, and a supportive AI assistant into one friendly dashboard.

## What this project does

This application helps students by providing:

- A secure user login and sign-up flow
- Mood tracking with saved records and history
- Private journal entry creation and AI-guided suggestions
- An AI wellness chatbot for emotional support
- Study resources for exam preparation across multiple streams
- A clean, responsive React dashboard for daily mental wellness tools

## Key features

### 1. User Authentication

Students can create accounts and login securely. The backend uses JWT authentication to protect mood and journal data.

Example login flow:

```js
const userRes = await axios.post("http://localhost:4004/api/login", user);
```

### 2. Mood Tracking

Students can record moods every day and view mood history.

Example mood save request:

```js
await fetch('/api/mood', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ mood }),
});
```

### 3. Private Journal

Students can write journal entries privately and save them to their account. The app also offers AI-driven suggestions based on journal content.

Example journal save request:

```js
await fetch('/api/journal', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ text: journalText }),
});
```

### 4. AI Support Chatbot

A wellness chatbot gives supportive responses to students who need encouragement, coping ideas, or just a friendly conversation.

Example chatbot request:

```js
const response = await fetch('/api/chatbot', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
});
```

### 5. Exam and Study Resources

The dashboard includes dedicated pages for exam preparation in different streams like JEE, NEET, UPSC, SSC, and LLB. This helps students access curated study guidance.

### 6. Student-Friendly Dashboard

The web app is built with a clear navigation structure and responsive UI so students can easily switch between wellness tools, study resources, and personal tracking.

## Why it is helpful for studentsa

- Encourages regular mental health check-ins.
- Provides a safe digital journal space.
- Supports students during exam stress with an AI helper.
- Helps organize feelings and build healthy habits.
- Offers exam-focused resources in one place.

## Tech stack

- Frontend: React, Vite, Axios, Bootstrap
- Backend: Node.js, Express, MongoDB, JWT, dotenv

## Run the project locally

1. Start the backend server:

```bash
cd backend
npm install
npm start
```

2. Start the frontend:

```bash
cd front-end
npm install
npm run dev
```

3. Open the app in your browser at `http://localhost:5173`

## Project structure

- `front-end/src/components/dashboard/` — Dashboard pages for mood, journal, chatbot, and exam guides
- `backend/routes/` — API routes for mood, journal, users, chatbot, and categories
- `backend/models/` — Mongoose models for users, mood entries, and journal entries

## Notes

- The app uses proxy configuration so frontend requests to `/api/*` are forwarded to the backend running on `http://localhost:4004`.
- Protected routes require a valid JWT token.

---

This project is built to support student mental wellness with practical tools and caring technology.