import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';

function Button({ appearance, children, className, ...props }: ButtonProps): JSX.Element {
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
		</button>
	);
}

export default Button;