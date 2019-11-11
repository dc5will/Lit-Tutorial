// Use relative paths for peer dependencies
import { LitElement, html } from 'lit-element';
import "./to-do-app";

class MainPage extends LitElement {
  render() {
    return html`
      <to-do-app></to-do-app>
    `;
  }
}
customElements.define("main-page", MainPage);
