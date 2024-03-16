import React from 'react';
import styles from './Paragraph.module.css';
import { formatSeconds } from '../../../shared/utils/time.js';

const Paragraph = ({data}) =>
{
	console.log(data);
	return (
		<div className={styles.paragraph}>
			<p className={styles.time}>{formatSeconds(data.start)}</p>
			<p className={styles.speaker}>{data.speaker}</p>
			<p>{data.text}</p>
		</div>
	);
};

export default Paragraph;