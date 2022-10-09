import { FooterProps } from './Footer.props';

export function Footer({ ...props }: FooterProps): JSX.Element {
	return (
		<div {...props}>
			Footer
		</div>
	);
}