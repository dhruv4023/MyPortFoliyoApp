const currentUserReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_CURRENT_USER':
            try {
                localStorage.getItem('Profile', JSON.stringify({ ...action?.data })) 
            } catch (error) {
                localStorage.clear()
            }
            return action.payload;
        default:
            return state;
    }
}

export default currentUserReducer;