const initState = {
    list: [],
    activeId: null
};

const hobbyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newList = [...state.list]
            newList.push(action.payload);
            return {
                ...state, // giữ các state hiện tại
                list: newList // cập nhật state mới
            };
        case 'SET_ACTIVE_HOBBY':
            return {
                ...state,
                activeId: action.payload.id
            }
        default:
            return state;
    }
}

export default hobbyReducer;