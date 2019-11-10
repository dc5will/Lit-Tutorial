# Lit-Element Tutorial
Personal reference for learning about setting up LitElement locally

## Initial Setup
- Install npm and Node.js (already installed)
- `npm install -g polymer-cli` [Polymer CLI doc](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli)
- `npm install lit-element` 
- `npm i -D npm i -D @webcomponents/webcomponentsjs`
- optional: install 'lit-html' VSCode extension to lint

## View in browser
- `polymer serve`
- Terminal will have link to http://127.0.0.1:8081/
- ctrl + c to stop

## Concepts
- Web components = set of standards that allows us to write *modular*, *reusable* and *encapsulated* HTML elements. Best thing about them is that you don't have to install any framework or library to start using them since they're based on web standards. Write web components using vanilla javascript.
- Custom Elements = Custom Elements api allows us to author our own DOM elements. 
- Shadow DOM = Gives us a way to encapsulate the styling and markup of our components. It's a sub DOM tree attached to a DOM element, to make sure none of our styling leaks out, or gets overwritten by any external styles. Great for modularity.
- HTML Templates = HTML <template> tag allows us to write reusable chunks of DOM. Inside a template, scripts don't run, images don't load, and styling/mark up is not rendered. Template tag itself is not even considered to be in the documentintil it's activated*. 

## Resources
- [Official LitElement doc](https://lit-element.polymer-project.org/guide)
- [Official lit-html doc](https://lit-html.polymer-project.org/)
- [Dev.to Web Components](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m#-what-are-web-components)





