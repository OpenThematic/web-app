import styles from './Word.module.css';

type Props = {
	data: Word;
};

const Word = ({ data }: Props) =>
{
	return (
		data.probability < .3 ? (
			<span className={styles.word + ' ' + styles.lowConfidence} contentEditable >{data.word.trim()}</span>
		) : (
			<span className={styles.word}>{data.word.trim()}</span>
		)
	);
};

export default Word;