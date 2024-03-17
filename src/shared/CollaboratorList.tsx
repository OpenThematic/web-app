import styles from './CollaboratorList.module.css';
import UserBadge from './UserBadge.jsx';
import { IUser } from './models/user';

type Props = {
	users: IUser[];
};

const CollaboratorList = ({ users }: Props) => {
	return (
		<div className={styles.list}>
			{users.map(user => (
				<UserBadge key={user.id} />
			))}
		</div>
	);
}

export default CollaboratorList;