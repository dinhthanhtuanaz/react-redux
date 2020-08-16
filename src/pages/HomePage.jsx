import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import casual from 'casual-browserify';
import { addNewHobby, setActiveHobby } from './../actions/hobby';

HomePage.propTypes = {

};

function HomePage(props) {
    //state day chinh la cac reducers: .hobby nghia la truy xuat den hobbyReducer
    //state ở đây chính là cái kho chứa(store đấy), cần thằng nào thì lấy thằng đấy ra.
    // strict comparison, shllow comparison
    // khi store thay đổi, nếu state thay đổi ==> useSelector lắng nghe và re-render lại nếu có sự thay đổi
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    // gộp
    // const hobbyState = useSelector(state => ({
    //     list : state.hobby.list,
    //     activeId : state.hobby.list
    // }));


    const dispatch = useDispatch();

    console.log(hobbyList);

    const handleAddHobbyClick = () => {
        // Random a hobby object : id+title
        const hobby = {
            id: casual.uuid,
            title: casual.title
        }

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(hobby);
        // dispatch lên store => tức là chạy vào reducers: đi qua toàn bộ reducers đấy:hobby, user
        dispatch(action);
    }

    const handleHobbyClick = hobby => {
        console.log('hobby clicked:', hobby);
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>HomePageok</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;