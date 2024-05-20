import styles from './Paragraph.module.css';
import { formatSeconds } from '../../../shared/utils/time';

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

	return (
		<div className={styles.paragraph}>
			<p className={styles.time} onClick={handleTimeClick}>{formatSeconds(data.start)}</p>
			<p className={styles.speaker}>{data.speaker}</p>
			<p>
				{data.words.map((word: Word, index: React.Key) => (
					<span key={index} className={(word.probability < 0.3 ? styles.lowConfidence : "")}>{word.word} </span>
				))}
			</p>
		</div>
	);
};

export default Paragraph;