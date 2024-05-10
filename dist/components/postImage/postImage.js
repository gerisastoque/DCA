import postStyles from './postImage.css';
export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["isLiked"] = "isLiked";
    Attribute["isSaved"] = "isSaved";
    Attribute["likesCount"] = "likesCount";
    Attribute["username"] = "username";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
class PostImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
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
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            //limpiar el contenido existente en el shadowroot
            this.shadowRoot.innerHTML = `
			<style>${postStyles}</style>
			<section class= "container">
			<img src = ${this.image}>
				<div>
					<div>
					 <img src= ${this.isLiked}>
					 <img src= ${this.isSaved}>
					</div>
					<h3> ${this.likesCount}</h3>
					<div>
					<p> ${this.username}</p>
					<p> ${this.description}</p>
					</div>
				</div>
			</section>

			`;
        }
    }
}
customElements.define('post-image', PostImage);
export default PostImage;
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}
// 	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
// 		if (oldValue !== newValue) {
// 			this.render();
// 		}
// 	}
// 	connectedCallback() {
// 		this.render();
// 	}
// 	render() {
// 		if (!this.shadowRoot) return;
// 		this.shadowRoot.innerHTML = `
//       <style>${postStyles}</style>
//       <section class="container">
//         <img class="img-post" src="${this.getAttribute(Attribut.image)}" alt="Post image">
//         <div class="post-details">
//           <div class="icons">
//             <img class="icon" src="${this.getAttribute(Attribut.isLiked)}" alt="Like icon">
//             <img class="icon" src="${this.getAttribute(Attribut.isSaved)}" alt="Save icon">
//           </div>
//           <h3>${this.getAttribute(Attribut.likesCount)} likes</h3>
//           <p class="username">${this.getAttribute(Attribut.username)}</p>
//           <p class="description">${this.getAttribute(Attribut.description)}</p>
//         </div>
//       </section>
//     `;
// 	}
// }
// customElements.define('post-image', PostImage);
// export default PostImage;
