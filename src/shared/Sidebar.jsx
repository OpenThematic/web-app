import NavigationItem from './NavigationItem.jsx';
import './Sidebar.css';

function Sidebar()
{
	return <div id='sidebar'>
		<div className="logo"><div></div>OpenThematic</div>
		<ul>
			<NavigationItem text={"Projects"} url={"/projects"} />
			<NavigationItem text={"Usage"} url={"/usage"} />
			<NavigationItem text={"Team"} url={"/team"} />
			<NavigationItem text={"Documentation"} url={"/documentation"} />
		</ul>
	</div>;
}

export default Sidebar;