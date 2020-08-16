import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import casual from 'casual-browserify';
import { addHobby, setActiveHobby } from './../actions/hobby';
HomePage.propTypes = {

};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();

    function handleRandomHobby() {
        //add hobby
        const hobby = {
            id: casual.uuid,
            title: casual.title
        }

        const action = addHobby(hobby);
        dispatch(action);
    }

    function handleClickHobby(hobby) {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            <button onClick={handleRandomHobby}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList}  activeId={activeId} onClickHobby={handleClickHobby}/>
        </div>
    );
}

export default HomePage;