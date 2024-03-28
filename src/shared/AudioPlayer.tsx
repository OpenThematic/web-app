import { ChangeEvent, useRef, useState } from 'react';
import FileInput from './FileInput';
import styles from './AudioPlayer.module.css';
import { IconPlayerPause, IconPlayerPlay, IconRewindBackward5, IconRewindForward5 } from '@tabler/icons-react';

interface Props
{
	id?: string;
	className?: string;
}

const AudioPlayer = ({ id, className }: Props) =>
{
	const [audioFile, setAudioFile] = useState<string | ArrayBuffer | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const audioElement = useRef<HTMLAudioElement>(null);

	const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) =>
	{
		if (event.target.files === null || event.target.files.length === 0)
		{
			return;
		}

		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = event =>
		{
			if (event.target === null) return;

			setAudioFile(event.target.result);
		};
		reader.onerror = () =>
		{
			console.error("Error reading file: " + reader.error);
		};
	};

	const togglePlay = () =>
	{
		if (audioElement.current?.paused)
		{
			audioElement.current?.play();
			setIsPlaying(true);
		} else
		{
			audioElement.current?.pause();
			setIsPlaying(false);
		}
	};

	const skipTime = (time: number) =>
	{
		if (!audioElement.current) return;

		audioElement.current.currentTime += time;
	};

	return (
		<div id={id} className={className + " " + styles.player}>
			{!audioFile && <FileInput text={"Add Audio"} onChange={handleFileSelected} />}
			{audioFile && <>
				<div className={styles.timeline}></div>
				<div className={styles.controls}>
					<button onClick={() => { skipTime(-5); }}><IconRewindBackward5 /></button>
					<button onClick={togglePlay}>{isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}</button>
					<button onClick={() => { skipTime(5); }}><IconRewindForward5 /></button>
				</div>
				<audio ref={audioElement}>
					<source src={audioFile?.toString()} type="audio/mp3" />
					Your browser does not support the audio element.
				</audio>
			</>}
		</div>
	);
};

export default AudioPlayer;