interface Transcript
{
	id: number;
	start: number;
	end: number;
	speaker: string;
	text: string;
	words: Word[];
}

interface Word
{
	id: number;
	start: number;
	end: number;
	probability: number;
	word: string;
}
