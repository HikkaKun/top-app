import { useEffect, useState } from 'react';
import { P, Rating, Tag } from '../components';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	useEffect(() => {
		console.log('Counter: ' + counter);

		return function cleanup(): void {
			console.log('Unmount');
		};
	});

	useEffect((): void => {
		console.log('Mounted');
	}, []);

	return (
		<div>
			<Htag tag='h1'>{counter}</Htag>
			<Button appearance='primary' arrow='right' onClick={(): void => setCounter((x: number): number => x + 1)}>Primary</Button>
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
			<Rating rating={4}></Rating>
		</div>
	);
}
