import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Htag, P, Rating, Tag, Button } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';


function Home({ menu }: HomeProps): JSX.Element {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}