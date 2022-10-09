import { HeaderProps } from './Header.props';

export function Header({ ...props }: HeaderProps): JSX.Element {
	return (
		<div {...props}>
			Header
		</div>
	);
}