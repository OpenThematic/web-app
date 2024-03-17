import styles from './Chip.module.css';

type Props = {
	label: string;
}

const Chip = ({ label }: Props) => {
	return (
		<div className={styles.chip}>
			{label}
		</div>
	);
}

export default Chip;