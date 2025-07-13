# Journal

A minimal, typography-heavy newsletter theme for [Ghost](https://github.com/TryGhost/Ghost).

**Demo: https://journal.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Journal/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally.

I'm going to use Docker to run a Node container.

```plaintext
docker run --rm -it -v .:/app --workdir /app node:lts bash 
```

After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/journal.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Local Ghost Environment

To test this locally before uploading to a live site, you should run Ghost locally and check it all looks good, again you can use Docker for this, run the following command and then head to <http://localhost:2368>.

```plaintext
docker run -d --name ghost -p 2368:2368 -e NODE_ENV=development ghost
```

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

# Copyright & License

Copyright (c) 2025 Sam Smith  
Copyright (c) 2013-2025 Ghost Foundation  
Released under the [MIT license](LICENSE)
