import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './shared/Breadcrumbs.jsx';
import Sidebar from './shared/Sidebar.jsx';
import ProjectsView from './features/Projects/ProjectsView.jsx';
import TeamView from './features/Team/TeamView.jsx';
import UsageView from './features/Usage/UsageView.jsx';
import DocumentationView from './features/Documentation/DocumentationView.jsx';
import NotFoundView from './features/Error/NotFoundView.jsx';

function App()
{
	const baseUrl = import.meta.env.BASE_URL;

	return <div id='app'>
		<BrowserRouter basename={baseUrl ?? '/'}>
			<Sidebar />
			<div id='main'>
				<Breadcrumbs />
				<Routes>
					<Route exact path="/" element={<ProjectsView />} />
					<Route path="/projects" element={<ProjectsView />} />
					<Route path="/team" element={<TeamView />} />
					<Route path="/usage" element={<UsageView />} />
					<Route path="/documentation" element={<DocumentationView />} />
					<Route path="*" element={<NotFoundView />} />
				</Routes>
			</div>
		</BrowserRouter>
	</div>
}

export default App;