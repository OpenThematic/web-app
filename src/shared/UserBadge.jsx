import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserBadge.module.css';

function UserBadge({ user })
{
	return (
		<div className={styles.badge}>

		</div>
	);
}

UserBadge.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		avatar: PropTypes.string,
	}).isRequired
};

export default UserBadge;