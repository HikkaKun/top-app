import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';
import ArrowIcon from './arrow.svg';

export function Button({ appearance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element {
	return (
		<button className={
			classnames(
				className,
				styles.button,
				styles[appearance]
			)
		}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={
				classnames(
					styles.arrow, styles[arrow]
				)
			}>
				<ArrowIcon />
			</span>}
		</button>
	);
}