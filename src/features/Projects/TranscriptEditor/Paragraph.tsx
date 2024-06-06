import styles from './Paragraph.module.css';
import { formatSeconds } from '../../../shared/utils/time';
import Word from './Word';
import { ChangeEvent, Fragment, MutableRefObject, RefObject } from 'react';

type Props = {
	data: Transcript;
	paragraphRefs: MutableRefObject<Map<string, RefObject<HTMLDivElement>>>;
	wordRefs: MutableRefObject<Map<string, RefObject<HTMLSpanElement>>>;
	onTimeClick?: (time: number) => void;
};

const Paragraph = ({ data, paragraphRefs, wordRefs, onTimeClick }: Props) =>
{
	const setRef = (ref: HTMLDivElement | null) =>
	{
		paragraphRefs.current.set(data.id.toString(), { current: ref }); // Create a new RefObject and store it
	};

	const handleTimeClick = () =>
	{
		if (!onTimeClick) return;

		onTimeClick(data.start);
	};

	const handleChange = (event: ChangeEvent<HTMLParagraphElement>) =>
	{
		console.log(event.target.innerText);
		// TODO: When editing text, check if word is entirely deleted or replaced
	};

	return (
		<div ref={setRef} className={styles.paragraph}>
			<p className={styles.time} onClick={handleTimeClick}>{formatSeconds(data.start)}</p>
			<p className={styles.speaker}>{data.speaker}</p>
			<p className={styles.text} onInput={handleChange} contentEditable suppressContentEditableWarning>
				{data.words.map((word: Word) =>
					<Fragment key={word.id}>
						<Word data={word} key={word.id} paragraphId={data.id} refs={wordRefs} />
						{' '}
					</Fragment>
				)}
			</p>
		</div>
	);
};

export default Paragraph;