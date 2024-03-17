import styles from './RecordingItem.module.css';
import Chip from '../../../shared/Chip.js';

const RecordingItem = () =>
{
	return (
		<div className={styles.recording + ' card'}>
			<div className={styles.header}>
				<h3>Recording</h3>
				<p>1:19:22</p>
			</div>
			<div className={styles.waveform}></div>
			<div className={styles.footer}>
				<div className={styles.steps}>
					<Chip label="Transcription" />
					<Chip label="Thematic coding" />
				</div>
				<p>Last updated 13 years ago</p>
			</div>
		</div>
	);
};

export default RecordingItem;