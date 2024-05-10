const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { LogIn } from '../types/logIn';
import { PostData } from '../types/postData';
import { TweetData } from '../types/tweetData';

const firebaseConfig = {
	apiKey: 'AIzaSyCU42uuS55TFRUWS2KJZzoQKjhTJT1Jciw',
	authDomain: 'proyecto-final-c5690.firebaseapp.com',
	projectId: 'proyecto-final-c5690',
	storageBucket: 'proyecto-final-c5690.appspot.com',
	messagingSenderId: '183150005663',
	appId: '1:183150005663:web:791e23ff92190ffddf41aa',
	measurementId: 'G-YKJ4DK3G23',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//logIn y Sign Up
export const addUser = async (FormData: Omit<LogIn, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'userAdded'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const addPost = async (FormData: Omit<PostData, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'postAdded'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const addTweet = async (FormData: Omit<TweetData, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'TweetAdded'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPost = async () => {
	const querySnapshot = await getDocs(collection(db, 'postAdded'));
	const Arraysongs: Array<PostData> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};

export const getTweet = async () => {
	const querySnapshot = await getDocs(collection(db, 'tweetAdded'));
	const Arraysongs: Array<TweetData> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};
