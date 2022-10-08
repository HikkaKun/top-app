import { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import classNames from 'classnames';

export function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map(
			(rating: JSX.Element, index: number): JSX.Element => (
				<StarIcon className={
					classNames(
						styles.star, {
						[styles.filled]: index < currentRating
					})
				} />
			)
		);
		setRatingArray(updatedArray);
	};

	useEffect((): void => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props}>
			{ratingArray.map(
				(rating: JSX.Element, index: number): JSX.Element => (
					<span key={index}>{rating}</span>
				)
			)}
		</div>
	);
}