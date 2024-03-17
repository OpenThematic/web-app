import styles from './UserBadge.module.css';
import { IUser } from './models/user'

type Props = {
	user: IUser;
};

const UserBadge = ({ user }: Props) => {
	return (
		<div className={styles.badge}>

		</div>
	);
}

export default UserBadge;