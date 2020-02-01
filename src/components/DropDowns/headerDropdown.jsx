import React, { useRef } from 'react';

/**
 * Custom Hooks
 */
import useDropdown from "../../customHooks/use-dropdown";

const HeaderDropdown = () => {

	const node = useRef();

	const [dropdown, toggleDropDown] = useDropdown(node);
	const onClick = () => toggleDropDown();

	const dropdownClass = "dropdown-heading";

	return (
		<div ref={node} className="dropdown">

			<button className="btn btn--small btn--uppercase header-navbar__services" onClick={onClick}>
					Services
					<i className="arrow-down"></i>
			</button>

			<ul className={dropdown ? dropdownClass : dropdownClass + " remove-display"}>
				<button className="dropdown-list">Property</button>
				<button className="dropdown-list">Title Perfection</button>
				<button className="dropdown-list">Investors</button>
				<button className="dropdown-list">Developers</button>
				<button className="dropdown-list">Asset Owners</button>
				<button className="dropdown-list">Distressed Sales</button>
				<button className="dropdown-list">Direct Sales Reps</button>
			</ul>

		</div>
	)
}

export default HeaderDropdown;