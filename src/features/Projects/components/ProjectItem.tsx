import styles from './ProjectItem.module.css';
import CollaboratorList from '../../../shared/CollaboratorList.js';
import { User } from '../../../shared/models/user';

const ProjectItem = () =>
{
	let mockUsers = [
		new User(1, "John", "Doe", "john.doe@example.com", "https://randomuser.me/api/portraits"),
		new User(2, "Jane", "Smith", "jane.smith@example.com", "https://randomuser.me/api/portraits"),
		new User(3, "Michael", "Johnson", "michael.johnson@example.com", "https://randomuser.me/api/portraits"),
		new User(4, "Emily", "Williams", "emily.williams@example.com", "https://randomuser.me/api/portraits"),
		new User(5, "David", "Brown", "david.brown@example.com", "https://randomuser.me/api/portraits"),
	];

	return (
		<div className={styles.item + " card"}>
			<div>
				<div className={styles.image}></div>
				<div className={styles.text}>
					<h3>Project Title</h3>
					<p>7 recordings</p>
				</div>
			</div>
			<div className={styles.collaborators}>
				<CollaboratorList users={mockUsers} />
				<p>7 collaborators</p>
			</div>
			<div>
				<div className={styles.status}>
					<p>68% completed</p>
					<p>Last updated two days ago</p>
				</div>
				<div className={styles.progress}></div>
			</div>
		</div>
	);
};

export default ProjectItem;