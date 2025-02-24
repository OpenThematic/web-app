import React from 'react';
import styles from './RightSidebar.module.css';

const RightSidebar: React.FC = () =>
{
	return (
		<div id={styles.sidebar}>
			<div></div>
			<div>
				<div className={styles.header}>Current transcript</div>
			</div>
			<div>
				<div className={styles.header}>Editor settings</div>
			</div>
			<div>
				<div className={styles.header}>Keyboard shortcuts</div>
			</div>
			<div>
				<div className={styles.header}>Export</div>
			</div>
		</div>
	);
};

export default RightSidebar;