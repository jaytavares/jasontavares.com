# jasontavares.com

This is the source for my personal website. It's a static Next.js portfolio focused on my backend and cloud engineering work. You're welcome to use anything you find here, although it's all here in the spirit of transparancy since development is what I do. If you're interested in hiring me for a development project, [reach out via my website](https://jasontavares.com).

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Firebase
- Playwright
- GitHub Actions CI

## Local development

A few notes to jog my memory should I forget things...

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Firebase App Hosting emulator uses [http://localhost:5002](http://localhost:5002)
because macOS Control Center reserves port 5000 on this machine. Start the
Firebase emulators with:

```bash
npm run emulators:start
```

To enable the historical benchmark callable locally and in App Hosting, provide
the Firebase web app values from the Firebase console in `.env.local` using the
names in `.env.example`.

## Tests and validation

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

## Deployment

Connect this repository to Firebase App Hosting and deploy:

```bash
firebase login
firebase use --add
firebase deploy --only apphosting
```

Deploy the callable function alongside App Hosting with:

```bash
firebase deploy --only functions,apphosting
```
