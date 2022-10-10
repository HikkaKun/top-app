import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Menu(): JSX.Element {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return (
		<div>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
}