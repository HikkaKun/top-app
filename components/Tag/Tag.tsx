import classnames from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export function Tag({ size = 'm', children, color = 'ghost', className, href, ...props }: TagProps): JSX.Element {
	return (
		<div className={
			classnames(
				styles.tag,
				className,
				styles[size],
				styles[color]
			)
		}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
}