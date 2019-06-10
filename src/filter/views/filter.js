import React from 'react';
import Link from './link.js';
import { FilterTypes } from '../../constants';
const Filters = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL}>{Filter.ALL}</Link>
            <Link filter={FilterTypes.COMPLETED}>{Filter.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{Filter.UNCOMPLETED}</Link>
        </p>
    )
}
export default Filters
