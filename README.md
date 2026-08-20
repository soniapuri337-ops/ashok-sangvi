# Design & Branding Studio

design and images + logo attached. 

also make sure:
Whenever you add or generate images for this project, save them as real static image files inside the public folder (for example public/image-name.png), and reference them in code using a simple direct path like "/image-name.png". Do not use the internal .asset.json pointer system or any @/assets import that resolves through Lovable's internal asset proxy (/__l5e/assets-v1/...), since that path only works inside Lovable's preview and breaks when the project is deployed on external platforms like Vercel. All image references in the code must be plain string paths pointing to files physically present in the public folder, so the project works correctly after exporting to GitHub and deploying elsewhere.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/850c72ae-dd93-42b9-954d-edf5cab21be8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
