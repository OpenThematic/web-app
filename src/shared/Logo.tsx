import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FC = () =>
{
	return (
		<div className={styles.logo}><span>T</span>OpenThematic</div>
	);
};

export default Logo;