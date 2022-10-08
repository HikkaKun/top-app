import { useEffect, useState } from 'react';
import { P, Rating, Tag } from '../components';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Htag tag='h1'>HTag</Htag>
			<Button appearance='primary' arrow='right'>Primary</Button>
			<Button appearance='ghost' arrow='down'>Ghost</Button>
			<P size='l'>Large</P>
			<P>Medium</P>
			<P size='s'>Small</P>
			<Tag size='s'>Small Tag</Tag>
			<Tag size='m'>Medium Tag</Tag>
			<Tag color='red'>Red Tag</Tag>
			<Tag color='gray'>Gray Tag</Tag>
			<Tag color='green'>Green Tag</Tag>
			<Tag color='primary'>Primary Tag</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
		</div>
	);
}
