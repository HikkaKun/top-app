import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';

function Button({ appearance, children }: ButtonProps): JSX.Element {
	return (
		<button className={classnames(
			styles.button,
			styles[appearance]
		)}>
			{children}
		</button>
	);
}

export default Button;