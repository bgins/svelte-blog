# svelte-blog

## Setup

Install dependencies:

```bash
npm install
```

Add `.env` and `.env.production` environments with `VITE_ORIGIN` variables for local development and production (used by `npm run build`).

Install playwright browsers:

```
npx playwright install
```

## Developing

Run in development mode:

```bash
npm run dev
```

## Building

Build production version:

```bash
npm run build
```

This command emits to the `build` directory.

## Testing

Run tests:

```bash
npm run test
```

This command runs playwright tests to check that pages and posts are reachable and have an expected `h1` title.

Run `npm run build` first to generate the manifest of posts.

## Notes

The `robots.txt` file was derived from [disallow-ai][disallow-ai].

[disallow-ai]: https://github.com/dmitrizzle/disallow-ai
