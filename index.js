// Use relative paths for peer dependencies
import "./my-element";

class MyOtherElement extends LitElement {
  render() {
    return html`
      <my-element></my-element>
    `;
  }
}
customElements.define("my-other-element", MyOtherElement);
