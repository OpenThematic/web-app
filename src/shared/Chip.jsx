import React from 'react';
import styles from './Chip.module.css';

function Chip({ label })
{
	return (
		<div className={styles.chip}>
			{label}
		</div>
	);
}

export default Chip;