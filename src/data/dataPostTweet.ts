// definimos la forma de los objetos, interface es nuestra plantilla

interface DataTweet {
	image: string;
	description: string;
	username: string;
}

// Nuestra data

const dataPostTweet: DataTweet[] = [
	{
		image: 'https://images.pexels.com/photos/6577906/pexels-photo-6577906.jpeg?auto=compress&cs=tinysrgb&w=600',
		description: 'Hydration is the key to a vibrant life 💧🔑',
		username: '@nata_ortiz',
	},
	{
		image:
			'https://images.pexels.com/photos/17895316/pexels-photo-17895316/free-photo-of-mujer-verano-modelo-rubia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: 'Nature walks are my therapy🌿❤️  #NatureHeals ',
		username: '@alejah__',
	},
	{
		image:
			'https://images.pexels.com/photos/6455804/pexels-photo-6455804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: '🌊🌞 Beach day bliss. #SeaLove',
		username: '@davidhc__',
	},
	{
		image:
			'https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: ' Early run, best start. #MorningRun 🏃‍♂️',
		username: '@juanesv08',
	},
	{
		image:
			'https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: '🏋️‍♀️💪 New PR on the deadlift! #StrengthGoals',
		username: '@juanesv08',
	},
	{
		image: 'https://images.pexels.com/photos/6577906/pexels-photo-6577906.jpeg?auto=compress&cs=tinysrgb&w=600',
		description: 'Post-workout smoothie 💪🌿',
		username: '@nata_ortiz',
	},
	{
		image:
			'https://images.pexels.com/photos/17538474/pexels-photo-17538474/free-photo-of-mujer-joven-sonriente-sonriendo.jpeg?auto=compress&cs=tinysrgb&w=600',
		description: 'Snack time: veggies and hummus🥒🥕 #HealthySnacks',
		username: '@ana_hillton',
	},
	{
		image:
			'https://images.pexels.com/photos/4531700/pexels-photo-4531700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: '📖✨ Found a gem of a book! #ReadingJoy',
		username: '@andreasv__',
	},
	{
		image:
			'https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: 'HIIT workout done. Who else loves the burn? 🤾‍♀️🔥',
		username: '@juanesv08',
	},
	{
		image:
			'https://images.pexels.com/photos/17895316/pexels-photo-17895316/free-photo-of-mujer-verano-modelo-rubia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: '🤸‍♀️🧘‍♂️ Yoga and gymnastics fusion. Flexibility is key! ',
		username: '@alejah__',
	},
	{
		image:
			'https://images.pexels.com/photos/6455804/pexels-photo-6455804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: 'Boxing class was intense today 🥊🔥 ',
		username: '@davidhc__',
	},
	{
		image:
			'https://images.pexels.com/photos/17538474/pexels-photo-17538474/free-photo-of-mujer-joven-sonriente-sonriendo.jpeg?auto=compress&cs=tinysrgb&w=600',
		description: 'Green tea kind of morning. #ZenStart 🍵',
		username: '@ana_hillton',
	},
];

// exportamos nuestra data
export default dataPostTweet;
