# The Common Sky - Peace Portal

A civic platform for rights, truth, and tools for a peaceful generation.

## Environment

Copy `.env.local.example` to `.env.local` and set:
- `JWT_SECRET`: 32+ random bytes
- `APK_SHA256`: sha256 of `public/citizen-app.apk`

## Default Locale

Root `/` redirects to `/en`. Switch via header language picker to `/ar` or `/he`.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000
