import { Link } from 'react-router-dom';
import './NavigationItem.css';

type Props = {
	text: string;
	url: string;
}

const NavigationItem = ({ text, url }: Props) => {
	return <Link to={url}>
		<li className='navigation-item'>
			{text}
		</li>
	</Link>
}

export default NavigationItem;