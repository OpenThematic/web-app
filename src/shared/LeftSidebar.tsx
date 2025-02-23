import styles from './LeftSidebar.module.css';

const Sidebar = () =>
{
	return <div id={styles.sidebar}>
		<div className={styles.logo}><img src={import.meta.env.BASE_URL + 'favicon.ico'}></img>OpenThematic</div>
		<ul>

		</ul>
	</div>;
};

export default Sidebar;