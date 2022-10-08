import { P } from '../components';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary' arrow='right'>Primary</Button>
			<Button appearance='ghost' arrow='down'>Ghost</Button>
			<P size='l'>Large</P>
			<P>Medium</P>
			<P size='s'>Small</P>
		</div>
	);
}
