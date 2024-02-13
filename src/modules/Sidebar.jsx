import NavigationItem from './NavigationItem.jsx';
import './Sidebar.css';

function Sidebar()
{
	return <div id='sidebar'>
		<div className="logo"><div></div>OpenThematic</div>
		<ul>
			<NavigationItem text={"Projects"} />
			<NavigationItem text={"Usage"} />
			<NavigationItem text={"Team"} />
			<NavigationItem text={"Documentation"} />
		</ul>
	</div>;
}

export default Sidebar;