import { Link } from 'react-router-dom';
import ProjectItem from './components/ProjectItem';
import styles from './ProjectsView.module.css';

const ProjectsView = () =>
{
	return (
		<div id={styles.view}>
			<div id={styles.projectList}>
				{[...Array(3)].map((_, index) => (
					<Link to="project"><ProjectItem key={index} /></Link>
				))}
			</div>
		</div>
	);
};

export default ProjectsView;