import { MutableRefObject, RefObject } from 'react';
import styles from './Word.module.css';

type Props = {
	data: Word;
	paragraphId: number;
	refs: MutableRefObject<Map<string, RefObject<HTMLSpanElement>>>;
};

const Word = ({ data, paragraphId, refs }: Props) =>
{
	const uniqueId = `${paragraphId}-${data.id}`;
	const lowConfidenceThreshold = .3;

	const setRef = (ref: HTMLSpanElement | null) =>
	{
		refs.current.set(uniqueId, { current: ref }); // Create a new RefObject and store it
	};

	return (
		data.probability < lowConfidenceThreshold ? (
			<span ref={setRef} className={styles.word + ' ' + styles.lowConfidence} contentEditable >{data.word.trim()}</span>
		) : (
			<span ref={setRef} className={styles.word}>{data.word.trim()}</span>
		)
	);
};

export default Word;