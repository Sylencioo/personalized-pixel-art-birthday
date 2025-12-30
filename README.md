# Personalized Pixel-Art Birthday Web App

A configuration-driven React app (built with Vite) that generates a personalized pixel-art birthday web experience. The project is designed to be single-recipient friendly while remaining reusable by swapping the configuration data in `src/config/birthdayConfig.js`.

## Quick start

1. Install dependencies

   npm install

2. Run development server

   npm run dev

3. Build for production

   npm run build

4. Edit the message and other settings in `src/config/birthdayConfig.js` to personalize the page.

## Deployment

This app is intended to be deployed to AWS S3 (static site) and distributed via CloudFront. Typical steps:

- Run `npm run build`
- Upload the `dist/` folder to your S3 bucket
- Create/Update a CloudFront distribution with that S3 origin

See `PROJECT_CONTEXT.md` for more details and notes.

## Repo & License

- Repository: https://github.com/Sylencioo/personalized-pixel-art-birthday
- License: MIT

## Contributing

If you want to contribute, open issues or PRs against the repository.
