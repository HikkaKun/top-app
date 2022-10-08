import classNames from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

export function P({ size = 'm', children, className, ...props }: PProps): JSX.Element {
	return (
		<p className={
			classNames(styles.p, className, styles[size])
		}
			{...props}
		>
			{children}
		</p>
	);
}