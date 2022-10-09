import classnames from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { P } from '../../components';

export function Footer({ className, ...props }: FooterProps): JSX.Element {
	return (
		<footer className={classnames(className, styles.footer)} {...props}>
			<P>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</P>
			<P><a href="#">Пользовательское соглашение</a></P>
			<P><a href="#">Политика конфиценциальности</a></P>
		</footer>
	);
}