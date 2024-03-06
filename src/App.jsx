import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './modules/Breadcrumbs.jsx';
import Sidebar from './modules/Sidebar.jsx';
import ProjectsView from './pages/ProjectsView.jsx';
import TeamView from './pages/TeamView.jsx';
import UsageView from './pages/UsageView.jsx';
import DocumentationView from './pages/DocumentationView.jsx';

function App()
{
	return <div id='app'>
		<BrowserRouter>
			<Sidebar />
			<div id='main'>
				<Breadcrumbs />
				<Routes>
					<Route exact path="/" element={<ProjectsView />} />
					<Route path="/projects" element={<ProjectsView />} />
					<Route path="/team" element={<TeamView />} />
					<Route path="/usage" element={<UsageView />} />
					<Route path="/documentation" element={<DocumentationView />} />
				</Routes>
			</div>
		</BrowserRouter>
	</div>
}

export default App;