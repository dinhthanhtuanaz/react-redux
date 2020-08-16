import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    onClickHobby: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: '',
    onClickHobby: null
}

function HobbyList(props) {
    const { hobbyList, activeId, onClickHobby } = props;

    function clickHobby(hobby) {
        onClickHobby(hobby);
    }

    return (
        <ul className='hobby-list'>
            {hobbyList.map(hobby => (
                <li
                    key={hobby.id}
                    onClick={() => clickHobby(hobby)}
                    className={activeId == hobby.id ? 'active' : ''}
                >{hobby.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;