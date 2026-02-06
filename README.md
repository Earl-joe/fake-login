# Call-of-Duty Style Login (React + Vite)

A simple, modern login screen built with React and Vite, styled like a dark Call of Duty / FPS game launcher (black + purple gradient, animated background). It ships with a mock login function you can replace with your own backend.

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. Open the printed `http://localhost:5173` URL in your browser.

## Where to plug in your backend

All auth/backend calls are centralized in `src/api/auth.js`.

- The exported `login({ email, password })` function is currently **mocked**:
  - It simulates a network delay.
  - Accepts `demo@demo.com` / `password` as valid credentials.
  - Throws an error for anything else.
- To connect your real backend:
  1. Set `API_BASE_URL` to your API base URL.
  2. Replace the mock section in `login` with a real `fetch`/`axios` call (a full example is commented in the file).
  3. Return whatever JSON shape you want; `App.jsx` expects `{ token, user: { email } }` by default, but you can adjust it.

The login form calls `login` on submit, and handles:

- Loading state (disables inputs and button).
- Success message (you can swap this for navigation / redirect).
- Error state (shows API error message).

## Customizing the UI

- Main React component: `src/App.jsx`
- Global styles & animations: `src/styles.css`

You can tweak:

- Colors: search for `#a855f7`, `#4c1d95`, and `#020617` in `styles.css`.
- Background image: change the `background-image` URL in `.background-overlay`.
- Text labels and flavor copy: edit the markup in `App.jsx`.

## Production build

```bash
npm run build
npm run preview
```

