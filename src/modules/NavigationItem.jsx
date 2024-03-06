import { Link } from 'react-router-dom';
import './NavigationItem.css';

function NavigationItem({ text, url })
{
	return <Link to={url}>
		<li className='navigation-item'>
			{text}
		</li>
	</Link>
}

export default NavigationItem;