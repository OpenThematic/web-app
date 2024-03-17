import React from 'react';
import styles from './ProjectView.module.css';
import { Link } from 'react-router-dom';
import RecordingItem from './components/RecordingItem.jsx';
import CollaboratorList from '../../shared/CollaboratorList.js';
import { User } from '../../shared/models/user';

const ProjectView = () => {
	let mockUsers = [
		new User(1, "John", "Doe", "john.doe@example.com", "https://randomuser.me/api/portraits"),
		new User(2, "Jane", "Smith", "jane.smith@example.com", "https://randomuser.me/api/portraits"),
		new User(3, "Michael", "Johnson", "michael.johnson@example.com", "https://randomuser.me/api/portraits"),
		new User(4, "Emily", "Williams", "emily.williams@example.com", "https://randomuser.me/api/portraits"),
		new User(5, "David", "Brown", "david.brown@example.com", "https://randomuser.me/api/portraits"),
	];

	return (
		<div id={styles.view}>
			<div id={styles.info}>
				<div id={styles.image}></div>
				<div>
					<h1>Project 1</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div id={styles.details}>
				<CollaboratorList users={mockUsers} />
			</div>
			<div id={styles.recordingsList}>
				<h2>Recordings</h2>
				{[...Array(3)].map((_, index) => (
					<Link to="recording"><RecordingItem key={index} /></Link>
				))}
			</div>
		</div>
	);
};

export default ProjectView;