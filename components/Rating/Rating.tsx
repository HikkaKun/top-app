import { KeyboardEvent, useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import classNames from 'classnames';

export function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map(
			(ratingElement: JSX.Element, index: number): JSX.Element => (
				<span className={
					classNames(
						styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={(): void => changeDisplay(index + 1)}
					onMouseLeave={(): void => changeDisplay(rating)}
					onClick={(): void => onClick(index + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(event: KeyboardEvent<SVGElement>): unknown => isEditable && handleSpace(index + 1, event)}
					/>
				</span>
			)
		);
		setRatingArray(updatedArray);
	};

	const changeDisplay = (index: number): void => {
		if (!isEditable) return;

		constructRating(index);
	};

	const onClick = (index: number): void => {
		if (!isEditable || !setRating) return;

		setRating(index);
	};

	const handleSpace = (index: number, event: KeyboardEvent<SVGElement>): void => {
		if (event.code != 'Space' || !setRating) {
			return;
		}

		setRating(index);
	};

	useEffect((): void => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props}>
			{ratingArray.map(
				(ratingElement: JSX.Element, index: number): JSX.Element => (
					<span key={index}>{ratingElement}</span>
				)
			)}
		</div>
	);
}