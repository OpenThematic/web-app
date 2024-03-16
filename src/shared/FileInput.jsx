import React from 'react';
import styles from './FileInput.module.css';

function FileInput({ text, onChange })
{
	let onFileSelected = (event) =>
	{
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