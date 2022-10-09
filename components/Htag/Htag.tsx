import React from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export function Htag({ tag, children }: HtagProps): JSX.Element {
	return React.createElement(tag, { className: styles[tag] }, children);
}