import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './shared/LeftSidebar';
import NotFoundView from './features/Error/NotFoundView';
import EditorView from './features/Editor/EditorView';

function App()
{
	const baseUrl = import.meta.env.BASE_URL;

	return <div id='app'>
		<BrowserRouter basename={baseUrl ?? '/'}>
			<Sidebar />
			<div id='main'>
				<Routes>
					<Route path="/" element={<EditorView />} />
					<Route path="/editor" element={<EditorView />} />
					<Route path="*" element={<NotFoundView />} />
				</Routes>
			</div>
		</BrowserRouter>
	</div>;
}

export default App;