import abueloStyles from './indexAbuelo.css';
import Register from './screens/SingUp/singUp';

// componentes
import './screens/account-Settings/accountSettings';
import './screens/change-Password/changePassword';
import './screens/creatPostImage/creatPostImage';
import Post from './screens/creatPostImage/creatPostImage';
import './screens/creatPostTweet/creatPostTweet';
import Tweet from './screens/creatPostTweet/creatPostTweet';
import './screens/createAccount/createAccount';
import './screens/dashboard/dashboard';
import Dashboard from './screens/dashboard/dashboard';
import './screens/logIn/logIn';
import Login from './screens/logIn/logIn';
import './screens/profile-Post/profilePost';
import './screens/profile-Tweet/profileTweet';
import { addObserver, appState, dispatch } from './store/index';
import { Screens } from './types/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';

		const login = this.ownerDocument.createElement('app-login') as Login;
		this.shadowRoot?.appendChild(login);

		// switch (appState.screens) {
		// 	case Screens.dashboard:
		// 		const dashboard = this.ownerDocument.createElement('dashboard-screen') as Dashboard;
		// 		this.shadowRoot?.appendChild(dashboard);
		// 		break;

		// 	// case Screens.accountSettings:
		// 	// 	const accountSettings = this.ownerDocument.createElement('app-accountSettings');
		// 	// 	this.shadowRoot?.appendChild(accountSettings);
		// 	// 	break;

		// 	// case Screens.profileTweet:
		// 	// 	const profileTweet = this.ownerDocument.createElement('profile-tweet');
		// 	// 	this.shadowRoot?.appendChild(profileTweet);
		// 	// 	break;

		// 	// case Screens.profilePost:
		// 	// 	const profilePost = this.ownerDocument.createElement('profile-post');
		// 	// 	this.shadowRoot?.appendChild(profilePost);
		// 	// 	break;

		// 	case Screens.creatPostImage:
		// 		const creatPostImage = this.ownerDocument.createElement('app-creatPost') as Post;
		// 		this.shadowRoot?.appendChild(creatPostImage);
		// 		break;

		// 	case Screens.creatPostTweet:
		// 		const creatPostTweet = this.ownerDocument.createElement('app-creatTweet') as Tweet;
		// 		this.shadowRoot?.appendChild(creatPostTweet);
		// 		break;

		// 	case Screens.signUp:
		// 		const signUp = this.ownerDocument.createElement('app-register') as Register;
		// 		this.shadowRoot?.appendChild(signUp);
		// 		break;

		// case Screens.login:
		// 	const login = this.ownerDocument.createElement('app-login') as Login;
		// 	this.shadowRoot?.appendChild(login);
		// 	break;

		// case Screens.changePassword:
		// 	const changePassword = this.ownerDocument.createElement('app-changePassword');
		// 	this.shadowRoot?.appendChild(changePassword);
		// 	break;

		// 	default:
		// 		break;
		// }
	}
}

customElements.define('app-container', AppContainer);
