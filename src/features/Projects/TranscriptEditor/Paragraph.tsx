import styles from './Paragraph.module.css';
import { formatSeconds } from '../../../shared/utils/time';
import Word from './Word';
import { ChangeEvent } from 'react';

type Props = {
	data: Transcript;
	onTimeClick?: (time: number) => void;
};

const Paragraph = ({ data, onTimeClick }: Props) =>
{
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
		<div className={styles.paragraph}>
			<p className={styles.time} onClick={handleTimeClick}>{formatSeconds(data.start)}</p>
			<p className={styles.speaker}>{data.speaker}</p>
			<p className={styles.text} onInput={handleChange} contentEditable suppressContentEditableWarning>
				{data.words.map((word: Word) =>
					<>
						<Word data={word} />
						{' '}
					</>
				)}
			</p>
		</div>
	);
};

export default Paragraph;