import React from 'react';
import styles from './CollaboratorList.module.css';
import UserBadge from './UserBadge.jsx';

function CollaboratorList({ users })
{
	return (
		<div className={styles.list}>
			{users.map(user => (
				<UserBadge key={user.id} user={user} />
			))}
		</div>
	);
}

export default CollaboratorList;