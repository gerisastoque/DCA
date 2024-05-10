import postStyles from './postImage.css';
export var Attribut;
(function (Attribut) {
    Attribut["image"] = "image";
    Attribut["isLiked"] = "isLiked";
    Attribut["isSaved"] = "isSaved";
    Attribut["likesCount"] = "likesCount";
    Attribut["username"] = "username";
    Attribut["description"] = "description";
})(Attribut || (Attribut = {}));
class PostImage extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            isLiked: null,
            isSaved: null,
            likesCount: null,
            username: null,
            description: null,
        };
        return Object.keys(attrs);
    }
    //   attributeChangedCallback(propName: Attribut, oldValue: string | undefined, newValue: string | undefined) {
    // 		switch (propName) {
    // 			default:
    // 				this[propName] = newValue;
    //         break;
    // 	}
    //   this.render();
    // }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
      <style>${postStyles}</style>

      <section class "container">
      <img class= "img-post" src = "${this.image}">

      <div>

      <div>
            <img class= "hear-Icon" src = ${this.isLiked}>
            <img class= "save-Icon" src = ${this.isSaved}>
      </div>

      <h3> ${this.likesCount}</h3>

      <div>
					<p>${this.username}</p>
					<p>${this.description}</p>
			</div>

      </div>

      </section>


        `;
        }
        const css = this.ownerDocument.createElement('style');
        css.innerHTML = postStyles;
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);
    }
}
customElements.define('post-image', PostImage);
export default PostImage;
