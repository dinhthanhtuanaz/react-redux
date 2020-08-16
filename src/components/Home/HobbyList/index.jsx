import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: '',
    onHobbyClick: null
}

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props;

    const handleHobbyClick = hobby => {
        onHobbyClick(hobby);
    }

    return (
        <ul className='list-hobby'>
            {
                hobbyList.map(hobby => (
                    <li 
                        key={hobby.id} 
                        onClick={() => handleHobbyClick(hobby)}
                        className={hobby.id == activeId ? 'active' : ''}
                    >{hobby.title}</li>
                ))
            }
        </ul>
    );
}

export default HobbyList;