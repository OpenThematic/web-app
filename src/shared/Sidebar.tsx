import NavigationItem from './NavigationItem.js';
import './Sidebar.css';

const Sidebar = () =>
{
	return <div id='sidebar'>
		<div className="logo"><img src={import.meta.env.BASE_URL + 'favicon.ico'}></img>OpenThematic</div>
		<ul>
			<NavigationItem text={"Projects"} url={"/projects"} />
			<NavigationItem text={"Usage"} url={"/usage"} />
			<NavigationItem text={"Team"} url={"/team"} />
			<NavigationItem text={"Documentation"} url={"/documentation"} />
		</ul>
	</div>;
};

export default Sidebar;