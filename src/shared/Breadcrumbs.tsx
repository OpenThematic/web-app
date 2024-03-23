import React from 'react';
import { useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () =>
{
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<div id="breadcrumbs">
			<ul>
				{pathnames.map((name, index) => (
					<React.Fragment key={index * 2}>
						<li>{name}</li>
						{index < pathnames.length - 1 && <li>/</li>}
					</React.Fragment>
				))}
			</ul>
		</div>
	);
};

export default Breadcrumbs;