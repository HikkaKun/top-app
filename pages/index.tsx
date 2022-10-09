import { useState } from 'react';
import { Htag, P, Rating, Tag, Button } from '../components';
import { withLayout } from '../layout/Layout';


function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
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
		</>
	);
}

export default withLayout(Home);