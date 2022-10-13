import { TopPageComponentProps } from './TopPageComponent.props';

function TopPageComponent({ page, products, firstCategory }: TopPageComponentProps): JSX.Element {
	return (
		<>
			{products && products.length}
		</>
	);
}

export default TopPageComponent;