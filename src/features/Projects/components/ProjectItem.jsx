import React from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = () =>
{
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
				<div>
					{[...Array(5)].map((_, index) => (
						<div className={styles.collaborator} key={index}></div>
					))}
				</div>
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