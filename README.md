# QIR Alliance Website

The one-stop shop for info about the QIR Alliance, resources, and events in the QIR community.

## Test build the site locally

You need Node (at least v8+) on your computer. To check if you have node and what version run this command in your terminal:

```bash
node --version
```

Clone this repo, fire up your terminal, go to the new folder and run:

```bash
npm install
```

This will install all the dependencies.

**Build it for dev**
To build your static website for local development run:

```bash
npm run build-dev
```

This will build the static website into the `/dev` folder without all the minifiying and purging stuff (<- much faster and a more human friendly code output, but a much bigger package)

**Run in dev mode**
To run the build-dev task automatically on file changes run:

```bash
npm run watch
```

That will run a local server from `/dev` folder and connects browser sync to it. On changes within the `/src` folder it will run the `npm run build-dev` command automatically and will refresh your browser.

**Build it for prod**
To build site for a prod deployment run:

```bash
npm run build
```

That will output the full site, with purged and minified CSS and minified html.
The output will be stored in the `/public` folder.
This is done automatically from main in GitHub Actions, and hosted by GitHub Pages.

---

Site developed from the <a href="https://11straps.com" target="_blank">11straps.com</a> template.
It combines the static site generator <a href="https://www.11ty.dev/" target="_blank">11ty</a> with the CSS framework <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a> and is stitched together with some npm and Gulp magic dust.
It minifies and purges the CSS file (so it removes any unused CSS) and comes with a static server and browser sync support for your local development.
