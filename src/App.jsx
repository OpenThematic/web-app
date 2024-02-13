import './App.css';
import Breadcrumbs from './modules/Breadcrumbs.jsx';
import Sidebar from './modules/Sidebar';

function App()
{
	return <div id='app'>
		<Sidebar />
		<div id='main'>
			<Breadcrumbs />
			<div id='content'>
				
			</div>
		</div>
	</div>
}

export default App;