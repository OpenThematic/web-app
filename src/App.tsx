import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './shared/Breadcrumbs';
import Sidebar from './shared/Sidebar';
import ProjectsView from './features/Projects/ProjectsView';
import TeamView from './features/Team/TeamView';
import UsageView from './features/Usage/UsageView';
import DocumentationView from './features/Documentation/DocumentationView';
import NotFoundView from './features/Error/NotFoundView';
import ProjectView from './features/Projects/ProjectView';
import HomeView from './features/Home/HomeView';
import RecordingView from './features/Projects/RecordingView';

function App()
{
	const baseUrl = import.meta.env.BASE_URL;

	return <div id='app'>
		<BrowserRouter basename={baseUrl ?? '/'}>
			<Sidebar />
			<div id='main'>
				<Breadcrumbs />
				<Routes>
					<Route path="/" element={<HomeView />} />
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