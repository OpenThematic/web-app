interface Transcript
{
	id: number;
	start: number;
	end: number;
	speaker: string;
	text: string;
	words: Word[];
	ref?: React.RefObject<HTMLDivElement>;
}

interface Word
{
	id: number;
	start: number;
	end: number;
	probability: number;
	word: string;
	ref?: React.RefObject<HTMLSpanElement>;
}
