import styles from './Paragraph.module.css';
import { formatSeconds } from '../../../shared/utils/time';

type Props = {
	data: Transcript;
};

const Paragraph = ({ data }: Props) => {
	return (
		<div className={styles.paragraph}>
			<p className={styles.time}>{formatSeconds(data.start)}</p>
			<p className={styles.speaker}>{data.speaker}</p>
			<p>{data.text}</p>
		</div>
	);
};

export default Paragraph;