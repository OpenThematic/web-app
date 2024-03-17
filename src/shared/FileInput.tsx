import { ChangeEvent } from 'react';
import styles from './FileInput.module.css';

type Props = {
	text: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ text, onChange }: Props) => {
	let onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event);
	}

	return (
		<label className={styles.fileInput}>
			{text}
			<input type="file" onChange={onFileSelected} />
		</label>
	);
}

export default FileInput;