//import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from '../types/store';
import { reducer } from './reducer';
import { navigate } from './actions';

const emptyState: AppState = {
	screens: Screens.login,
	PostData: [],
	tweetData: [],
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
