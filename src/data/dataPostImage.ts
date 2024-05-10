// definimos la forma de los objetos, interface es nuestra plantilla

interface DataPost {
	id: string;
	image: string;
	isLiked: boolean;
	isSaved: boolean;
	likesCount: string;
	username: string;
	description: string;
}

// Nuestra data

const dataPostImage: DataPost[] = [
	{
		id: '1',
		image:
			'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		isLiked: true,
		isSaved: true,
		likesCount: '950',
		username: '@guti_santi',
		description: 'Ready for the next marathons',
	},
	{
		id: '2',
		image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
		isLiked: true,
		isSaved: false,
		likesCount: '590',
		username: '@alejah__',
		description: 'Exercise: self-❤️  in motion',
	},
	{
		id: '3',
		image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
		isLiked: true,
		isSaved: true,
		likesCount: '1300',
		username: '@ana_hillton',
		description: 'Energy for the day ✨🥕',
	},
	{
		id: '4',
		image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
		isLiked: true,
		isSaved: false,
		likesCount: '480',
		username: '@juanesv08',
		description: 'Mastering the ropes 🔥',
	},
];

// exportamos nuestra data

export default dataPostImage;
