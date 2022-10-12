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
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export function Menu(): JSX.Element {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	function openSecondLevel(secondCategory: string): void {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}

			return m;
		}));
	}

	function buildfirstLevel(): JSX.Element {
		return (
			<>
				{firstLevelMenu.map(m => {
					const isSecondLevel = m.id == firstCategory;

					return (
						<div key={m.route}>
							<Link href={`/${m.route}`} >
								<a>
									<div className={classnames(styles.firstLevel, {
										[styles.firstLevelActive]: isSecondLevel
									})}>
										{m.icon}
										<span>{m.name}</span>
									</div>
								</a>
							</Link>
							{isSecondLevel && buildSecondLevel(m)}
						</div>
					);
				})}
			</>
		);
	}

	function buildSecondLevel(menuItem: FirstLevelMenuItem): JSX.Element {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}

					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={(): void => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
							<div className={classnames(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	function buildThirdLevel(pages: PageItem[], route: string): JSX.Element[] {
		return (
			pages.map(page => (
				<Link href={`/${route}/${page.alias}`}>
					<a className={classnames(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
					})}>
						{page.category}
					</a>
				</Link>
			))
		);
	}

	return (
		<div className={styles.menu}>
			{buildfirstLevel()}
		</div>
	);
}