import ProjectItem from './components/ProjectItem.jsx';
import styles from './ProjectsView.module.css';

const ProjectsView = () =>
{
	return (
		<div id={styles.view}>
			<div id={styles.projectList}>
				{[...Array(3)].map((_, index) => (
					<ProjectItem key={index} />
				))}
			</div>
		</div>
	);
}

export default ProjectsView;