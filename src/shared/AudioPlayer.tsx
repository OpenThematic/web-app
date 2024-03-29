import { ChangeEvent, useEffect, useRef, useState } from 'react';
import FileInput from './FileInput';
import styles from './AudioPlayer.module.css';
import { IconPlayerPause, IconPlayerPlay, IconRewindBackward5, IconRewindForward5 } from '@tabler/icons-react';

interface Props
{
	time?: number;
	id?: string;
	className?: string;
}

// TODO: Move timeline/progress to separate component

const AudioPlayer = ({ time, id, className }: Props) =>
{
	const [audioFile, setAudioFile] = useState<string | ArrayBuffer | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(0);
	const audioElement = useRef<HTMLAudioElement>(null);
	const progressIndicator = useRef<HTMLDivElement>(null);
	const interval = useRef<NodeJS.Timeout | null>(null);

	useEffect(() =>
	{
		return () =>
		{
			pause();
		};
	}, []);

	useEffect(() =>
	{
		if (time)
		{
			seek(time);
		}
	}, [time]);

	useEffect(() =>
	{
		const onMetadataLoaded = () =>
		{
			seek(time || 0);
		};

		audioElement.current?.addEventListener('loadedmetadata', onMetadataLoaded);

		return () =>
		{
			audioElement.current?.removeEventListener('loadedmetadata', onMetadataLoaded);
		};
	}, [audioFile]);

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
			if (!event.target) return;

			setAudioFile(event.target.result);
		};
		reader.onerror = () =>
		{
			console.error("Error reading file: " + reader.error);
		};
	};

	const handleTimelineClick = (event: React.MouseEvent<HTMLDivElement>) =>
	{
		if (!audioElement.current) return;

		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const width = rect.width;
		const percentage = x / width;
		const time = percentage * audioElement.current.duration;

		seek(time);
	};

	const play = () =>
	{
		interval.current = setInterval(() =>
		{
			setProgress(audioElement.current!.currentTime / audioElement.current!.duration * 100);
		}, 1000);
		audioElement.current?.play();
		setIsPlaying(true);
	};

	const pause = () =>
	{
		if (interval.current)
		{
			clearInterval(interval.current);
		}
		audioElement.current?.pause();
		setIsPlaying(false);
	};

	const togglePlay = () =>
	{
		audioElement.current?.paused ? play() : pause();
	};

	const skipTime = (time: number) =>
	{
		if (!audioElement.current) return;

		audioElement.current.currentTime += time;
		setProgress(audioElement.current.currentTime / audioElement.current.duration * 100);
	};

	const seek = (time: number) =>
	{
		if (!audioElement.current) return;

		audioElement.current.currentTime = time;
		setProgress(time / audioElement.current.duration * 100);
	};

	return (
		<div id={id} className={className + " " + styles.player}>
			{!audioFile && <FileInput text={"Add Audio"} onChange={handleFileSelected} />}
			{audioFile && <>
				<div className={styles.timeline} onClick={handleTimelineClick}>
					<div ref={progressIndicator} className={styles.progress} style={{ width: `${progress}%` }}></div>
				</div>
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