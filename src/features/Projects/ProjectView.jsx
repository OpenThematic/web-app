import React from 'react';
import styles from './ProjectView.module.css';
import { Link } from 'react-router-dom';
import RecordingItem from './components/RecordingItem.jsx';

const ProjectView = () =>
{
	return (
		<div id={styles.view}>
			<div id={styles.info}>
				<div id={styles.image}></div>
				<div>
					<h1>Project 1</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
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