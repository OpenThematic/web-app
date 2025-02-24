import styles from './LeftSidebar.module.css';
import Logo from './Logo';

const Sidebar = () =>
{
	return <div id={styles.sidebar}>
		<div>
			<Logo />
		</div>
		<div>
			<div className={styles.header}>Projects</div>
			<ul>
				<li>Ecological solutions</li>
				<li>Terraforming Mars</li>
				<li>Microplastics and health</li>
				<li>Gamification in learning</li>
			</ul>
		</div>
	</div>;
};

export default Sidebar;