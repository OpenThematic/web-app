import React from 'react';
import styles from './RecordingView.module.css';
import FileInput from '../../shared/FileInput.jsx';

function RecordingView()
{
	const [transcript, setTranscript] = React.useState("");

	function handleFileSelected(event)
	{
		let reader = new FileReader();
		reader.readAsText(event.target.files[0]);
		reader.onload = event =>
		{
			try {
				setTranscript(JSON.parse(event.target.result));
			} catch (error) {
				console.error("Error parsing JSON file: " + error.message);
			}
		}
		reader.onerror = () =>
		{
			console.error("Error reading file: " + reader.error);
		}
	}

	return (
		<div id={styles.view}>
			{!transcript && <FileInput text={"Add JSON"} onChange={handleFileSelected} />}
			{transcript && (
				<div>
					{transcript.map((line, index) => (
						<p key={index}>
							{line.text}
						</p>
					))}
				</div>
			)}
		</div>
	);
}

export default RecordingView;