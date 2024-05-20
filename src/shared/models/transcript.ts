interface Transcript
{
	start: number;
	end: number;
	speaker: string;
	text: string;
	words: Word[];
}

interface Word
{
	start: number;
	end: number;
	probability: number;
	word: string;
}
