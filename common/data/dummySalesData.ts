import moment, { Moment } from 'moment';

const data: {
	id: number;
	name: string;
	type: string;
	price: number;
	count: number;
	date: Moment;
	state: boolean;
}[] = [
	{
		id: 1,
		name: 'Añadir foto de perfil',
		type: 'Sales',
		price: 36,
		count: 982,
		date: moment(),
		state: true,
	},
	{
		id: 2,
		name: 'Agregar el número de teléfono',
		type: 'Sales',
		price: 32,
		count: 423,
		date: moment().add(-1, 'day'),
		state: false,
	},
	{
		id: 3,
		name: 'Confirme su dirección de correo electrónico',
		type: 'Sales',
		price: 24,
		count: 678,
		date: moment().add(-1, 'day'),
		state: true,
	},
	{
		id: 4,
		name: 'Invitar a amigos',
		type: 'Sales',
		price: 24,
		count: 532,
		date: moment().add(-2, 'day'),
		state: true,
	},
];
export default data;
