# [UI5/Fiori](https://sap.github.io/ui5-webcomponents/) React Starter powered by Vite

A template for business developers looking to quickly develop and prototype UI5/Fiori apps with modern technology, practices and tooling.

<!-- <h6 align='center'>
<a href="https://ui5-react-vite.netlify.app/">Live Demo</a>
</h6> -->

</p>

## Features

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness
- 🗂 [File based routing](./src/pages)
- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing
- 🦾 TypeScript, of course
- ![Alt text](https://api.iconify.design/logos:vitejs.svg) [Vite](https://github.com/vitejs/vite)
- Proxy OData v4 [TripPin](https://www.odata.org/blog/trippin-new-odata-v4-sample-service/) service for demoing
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-reactjs.svg) [React](https://github.com/facebook/react) and [UI5 Web Components for React](https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--page)
- `<img src="https://api.iconify.design/logos:swr.svg" title="" alt="Alt text" width="35">` [SWR](https://swr.vercel.app/) for data fetching, caching, mutations and revalidation

  <!-- - ☁️ Deploy on Netlify, zero-config -->

  <!-- - 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons) -->

Inspired by the amazing [Vitesse](https://github.com/antfu/vitesse) template.

## Pre-packed

<!-- ### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons) -->

### Plugins

- [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use react/react-router-dom API and others without importing
- [usehooks-ts](https://usehooks-ts.com/) - collection of useful React hooks
- [`vite-plugin-imp`](https://github.com/hannoeru/vite-plugin-pages) - simple importing and tree-shaking for web libraries such as Lodash

## Try it now

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/dewdad/ui5-react-vite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit dewdad/ui5-react-vite my-fiori-app
cd my-fiori-app
npm i
npm run start
```

## Features Roadmap

- [ ] **Navigation Routing**

  - [ ] Route as single source of truth => state by route/url-query (for sorting, filtering, etc.), avoid React state whenever possible

    - [With React-Router](https://ui.dev/react-router-query-strings)
      - Why you should lift component state up to the URL [https://youtu.be/sFTGEs2WXQ4](https://youtu.be/sFTGEs2WXQ4)
    - [With useQueryParams hook](https://github.com/pbeshai/use-query-params)
    - [atomWithHash from &#34;jotai/utils&#34; package](https://betterprogramming.pub/how-and-why-you-should-store-react-ui-state-in-the-url-f2013a204cb2#694f)
    - With React-Location
      - [Blog series](https://omarelhawary.me/blog/file-based-routing-with-react-location-data-loaders) about file-based routing for React with React-location
      - [https://react-location.tanstack.com/](https://react-location.tanstack.com/)
  - [ ] File based routing with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) (auto-generated)

  - [General Best Practices for Routing](https://www.bigbinary.com/react-best-practices/best-practices-in-react-routing)

  - [ ] Enable Launchpad Service integration by supporting semantic objects + pre-filling of fields when navigating
- [X] Front-end tooling with [Vite](https://vitejs.dev/) instead of ([CRAs Webpack](https://www.youtube.com/watch?v=-KEuTPIpLbE)) for application lifecycle management
- [X] i18n
- [ ] **Authentication**
  - [ ] Migrate hooks from ReactQuery to SWR
- [ ] Typescript migration
  !!! Do not spend time typing API types !!!

  - [ ] Use inference and type generation from API points whenever possible
- [ ] Testing _**need to complete porting from CRA_

  - [ ] Unit
  - [ ] E2E

- API Management

  - [X] API proxy with Vite
  - [ ] API Mocking and Generation
    - [X] Mock with json-server
    - [ ] Using a [OData client generation](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client) for TypeScript interfaces to input to a [faking mock server](https://github.com/satrong/vite-plugin-lessmock)

- [ ] Linting _**need to complete porting from CRA, fix remaining errs_
- [ ] Pre-commit sanity, rename to .husky folder in root after fixing linting issues, and remove ## symbols from package.json props
- [X] Forms

  - [X] [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup)
- [ ] Data layer

  - SAP Cloud SDK: [Generate an OData client for JavaScript](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client)
- [ ] Styling customizations with [UnoCSS](https://github.com/unocss/unocss)
- [ ] State Management with [**Storeon**](https://github.com/storeon/storeon/blob/main/README.md), a tiny, redux-like state manager.

- SAP Product Integration

  - [ ] 🟢  **Integration with Launchpad Service**
  - [ ] Theme selection via Launchpad settings
- Developer Experience

  - [ ] Testing Launchpad navigation locally
- Ideas for UI Samples

  - [ ] Filterbar with Go button, filters and fuzzy search
  - [ ] Tabbed sections on the Object Page
  - [ ] Texts and Text Arrangement for data fields
  - [ ] Tabular value helps
  - [ ] Supporting draft mode

## References

- [Build a Single Page Application Using UI5 Web Components for React](https://developers.sap.com/mission.react-spa.html) _(@developers.sap.com)_
- [Develop a Fiori Launchpad App with Your Own Dev Tools](https://developers.sap.com/mission.sapui5-cf-launchpad.html?url_id=text-us-recommendation) _(@developers.sap.com)_
