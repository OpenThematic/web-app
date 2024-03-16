import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './shared/Breadcrumbs.jsx';
import Sidebar from './shared/Sidebar.jsx';
import ProjectsView from './features/Projects/ProjectsView.jsx';
import TeamView from './features/Team/TeamView.jsx';
import UsageView from './features/Usage/UsageView.jsx';
import DocumentationView from './features/Documentation/DocumentationView.jsx';
import NotFoundView from './features/Error/NotFoundView.jsx';
import ProjectView from './features/Projects/ProjectView.jsx';
import HomeView from './features/Home/HomeView.jsx';
import RecordingView from './features/Projects/RecordingView.jsx';

function App()
{
	const baseUrl = import.meta.env.BASE_URL;

	return <div id='app'>
		<BrowserRouter basename={baseUrl ?? '/'}>
			<Sidebar />
			<div id='main'>
				<Breadcrumbs />
				<Routes>
					<Route exact path="/" element={<HomeView />} />
					<Route path="/projects" element={<ProjectsView />} />
					<Route path="/projects/project" element={<ProjectView />} />
					<Route path="/projects/project/recording" element={<RecordingView />} />
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