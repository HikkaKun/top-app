import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/hat.svg';
import ServicesIcon from './icons/cloud.svg';
import BooksIcon from './icons/book.svg';
import ProductsIcon from './icons/box.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './Menu.module.css';
import classnames from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export function Menu(): JSX.Element {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	function buildfirstLevel(): JSX.Element {
		return (
			<>
				{firstLevelMenu.map(menu => {
					const isSecondLevel = menu.id == firstCategory;

					return (
						<div key={menu.route}>
							<a href={`/${menu.route}`}>
								<div className={classnames(styles.firstLevel, {
									[styles.firstLevelActive]: isSecondLevel
								})}>
									{menu.icon}
									<span>{menu.name}</span>
								</div>
							</a>
							{isSecondLevel && buildSecondLevel(menu)}
						</div>
					);
				})}
			</>
		);
	}

	function buildSecondLevel(menuItem: FirstLevelMenuItem): JSX.Element {
		return (
			<div className={styles.secondBlock}>
				{menu.map(menu => (
					<div key={menu._id.secondCategory}>
						<div className={styles.secondLevel}>{menu._id.secondCategory}</div>
						<div className={classnames(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: menu.isOpened
						})}>
							{buildThirdLevel(menu.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	}

	function buildThirdLevel(pages: PageItem[], route: string): JSX.Element[] {
		return (
			pages.map(page => (
				<a href={`/${route}/${page.alias}`} className={classnames(styles.thirdLevel, {
					[styles.active]: false
				})}>
					{page.category}
				</a>
			))
		);
	}

	return (
		<div className={styles.menu}>
			{buildfirstLevel()}
		</div>
	);
}