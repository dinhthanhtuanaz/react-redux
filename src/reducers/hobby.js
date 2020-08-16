const initState = {
    list: [
        {id:1, title:'ABC'}
    ],
    activeId: null
}

const hobbyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        default:
            return state;
    }
}

export default hobbyReducer;