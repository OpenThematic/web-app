import React, { ChangeEvent } from 'react';
import styles from './RecordingView.module.css';
import FileInput from '../../shared/FileInput';
import Paragraph from './TranscriptEditor/Paragraph';

const RecordingView = () => {
	const [transcript, setTranscript] = React.useState<Transcript[] | null>(null);

	const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files === null || event.target.files.length === 0) {
			return;
		}

		let reader = new FileReader();
		reader.readAsText(event.target.files[0]);
		reader.onload = event => {
			if (event.target === null || typeof event.target.result !== "string") {
				return;
			}

			try {
				setTranscript(JSON.parse(event.target.result as string));
			} catch (error: any) {
				console.error("Error parsing JSON file: " + error.message);
			}
		}
		reader.onerror = () => {
			console.error("Error reading file: " + reader.error);
		}
	}

	return (
		<div id={styles.view}>
			{!transcript && <FileInput text={"Add JSON"} onChange={handleFileSelected} />}
			{transcript && (
				<div>
					{transcript.map((data: Transcript, index: React.Key) => (
						<Paragraph data={data} key={index} />
					))}
				</div>
			)}
		</div>
	);
}

export default RecordingView;