import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import classnames from 'classnames';
import styles from './Sidebar.module.css';

export function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
	return (
		<div className={classnames(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<div>Поиск</div>
			<Menu />
		</div>
	);
}