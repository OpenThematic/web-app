import { ChangeEvent, createRef, useEffect, useState } from 'react';
import styles from './RecordingView.module.css';
import FileInput from '../../shared/FileInput';
import Paragraph from './TranscriptEditor/Paragraph';
import AudioPlayer from '../../shared/AudioPlayer';

const probabilityThreshold = .3;

const RecordingView = () =>
{
	const [transcript, setTranscript] = useState<Transcript[] | null>(null);
	const [words, setWords] = useState<Word[]>([]);
	const [uncertainWords, setUncertainWords] = useState<Word[]>([]);
	const [selectedWord, setSelectedWord] = useState<Word | null>(null);
	const [time, setTime] = useState<number | null>(null);

	useEffect(() =>
	{
		document.addEventListener('keydown', handleKeyPress);

		return () =>
		{
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [transcript, words, uncertainWords, selectedWord]);

	const loadJson = (event: ChangeEvent<HTMLInputElement>) =>
	{
		if (event.target.files === null || event.target.files.length === 0)
		{
			return;
		}

		let reader = new FileReader();
		reader.readAsText(event.target.files[0]);
		reader.onload = event =>
		{
			if (event.target === null || typeof event.target.result !== "string")
			{
				return;
			}

			try
			{
				const paragraphs = JSON.parse(event.target.result as string)['segments'];

				const paragraphsWithRefs = paragraphs.map((p: Transcript) => ({
					...p,
					ref: createRef<HTMLDivElement>(),
					words: p.words.map((w: Word) => ({
						...w,
						ref: createRef<HTMLSpanElement>()
					}))
				}));

				const allWords = paragraphsWithRefs.flatMap((p: Transcript) => p.words);

				setTranscript(paragraphsWithRefs);
				setWords(allWords);
				setUncertainWords(allWords.filter((w: Word) => w.probability <= probabilityThreshold));
				setSelectedWord(allWords[0]);
			}
			catch (error: any)
			{
				console.error("Error parsing JSON file: " + error.message);
			}
		};
		reader.onerror = () =>
		{
			console.error("Error reading file: " + reader.error);
		};
	};

	const handleTimeClick = (time: number) =>
	{
		setTime(time);
	};

	const handleKeyPress = (event: KeyboardEvent) =>
	{
		if (event.key === 'Tab')
		{
			event.preventDefault();
			selectNextUncertainWord();
		}
	};

	const selectNextUncertainWord = () =>
	{
		console.log(uncertainWords);
	};

	return <>
		<div id={styles.view}>
			<div id={styles.content}>
				{!transcript && <FileInput text={"Add JSON"} onChange={loadJson} />}
				{transcript && (
					<div>
						{transcript.map((data: Transcript) => (
							<Paragraph data={data} onTimeClick={handleTimeClick} key={data.id} />
						))}
					</div>
				)}
			</div>
			<div id={styles.audioPlayer}>
				<AudioPlayer time={time ?? 0} />
			</div>
		</div>
	</>;
};

export default RecordingView;
