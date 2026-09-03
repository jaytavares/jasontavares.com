# jasontavares.com

The source for Jay Tavares's personal website: a static Next.js portfolio focused on backend and cloud engineering work.

## Stack

- Next.js and TypeScript
- Tailwind CSS
- Static export
- Firebase Hosting configuration
- Playwright smoke tests
- GitHub Actions CI

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate the production build

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

The static site is generated in `out/`.

## Firebase deployment

Connect this repository to a Firebase project before the first deployment:

```bash
npx firebase-tools login
npx firebase-tools use --add
npm run build
npx firebase-tools deploy --only hosting
```

Do not commit `.firebaserc` until the intended Firebase project ID has been reviewed.

## Content principles

- Attribute only Jay's own work and contributions.
- Base project date ranges on Jay's actual contribution dates.
- Keep client-confidential implementation details out of public copy.
- Treat TypeScript, Node.js, Firebase, GCP, and Temporal as the current stack without artificially separating every other technology into an "old" category.
