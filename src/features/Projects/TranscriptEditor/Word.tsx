import styles from './Word.module.css';

type Props = {
	data: Word;
};

const Word = ({ data }: Props) =>
{
	const lowConfidenceThreshold = .3;

	return (
		data.probability < lowConfidenceThreshold ? (
			<span ref={data.ref} className={styles.lowConfidence} contentEditable >{data.word.trim()}</span>
		) : (
			<span ref={data.ref} className={styles.word}>{data.word.trim()}</span>
		)
	);
};

export default Word;