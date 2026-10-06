# jasontavares.com

Source for [jasontavares.com](https://jasontavares.com), my personal portfolio as a backend and cloud engineer in Providence, Rhode Island.

The site presents selected production work, the technologies I use, physical-computing projects, and a more personal About Me section. It is built with the Next.js App Router and deployed on Firebase App Hosting.

## Highlights

- Backend and cloud work for CurioVision Financial, MultifamilyProperties.com, Coolidge Corner Theatre, and veterinary associations
- Physical-computing projects including Cinesense and WestSideLights
- An interactive comparison showing things newer than my 1891 house
- Responsive typography and layouts for mobile and desktop
- Semantic HTML, visible keyboard focus, reduced-motion support, descriptive metadata, JSON-LD, a sitemap, and robots directives
- Playwright coverage for responsive reflow, keyboard navigation, link behavior, the interactive comparison, and lazy-loaded images

## Stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Firebase App Hosting
- Playwright
- ESLint
- GitHub Actions

The exact framework and tool versions are pinned in `package-lock.json`.

## Local development

Node.js 24 is used in CI.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The historical comparison is implemented as a Next.js server action and does not require Firebase client environment variables.

### Firebase App Hosting emulator

The local App Hosting emulator runs on port 5002 because macOS Control Center reserves port 5000 on my development machine.

```bash
npm run emulators:start
```

Open [http://localhost:5002](http://localhost:5002).

## Tests and validation

Run the same checks used by CI:

```bash
npm run lint
npm run build
npx playwright install --with-deps chromium
npm run test:e2e
```

Playwright runs the behavior-focused suite against desktop and mobile Chromium profiles.

## Deployment

Firebase App Hosting configuration lives in `firebase.json` and `apphosting.yaml`. After selecting the configured Firebase project, deploy with:

```bash
firebase login
firebase use --add
firebase deploy --only apphosting
```

The custom production domain is [jasontavares.com](https://jasontavares.com).

## Repository note

This repository is public so prospective collaborators and employers can inspect how the site is built. No license is currently granted for reuse or redistribution.
