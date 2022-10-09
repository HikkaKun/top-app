import { SidebarProps } from './Sidebar.props';

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
}