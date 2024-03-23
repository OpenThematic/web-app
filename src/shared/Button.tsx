import styles from './Button.module.css';

type Props = {
	text: string;
};

const Button = ({ text }: Props) =>
{
	return (
		<button className={styles.button}>
			{text}
		</button>
	);
};

export default Button;
