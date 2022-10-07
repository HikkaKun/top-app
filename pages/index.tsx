import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


export default function Home(): JSX.Element {
	return (
		<div >
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
		</div>
	);
}
