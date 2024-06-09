import cn from 'classnames';

import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
	const buttonsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'moreThen1000', label: 'З/П больше 1000$' },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		return (
			<button
				type='button'
				className={cn(
					'btn',
					{ 'btn-light': filter === name },
					{ 'btn-outline-light': filter !== name }
				)}
				key={name}
				onClick={() => onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
