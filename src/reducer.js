export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCCzPoWqs7-YqB4U79bTxoFDXH472MLENtsp4-zVinrA-9AQhA4rNYPDSEWjr502NkSwRz7jzjBWZhEUvRxuf8zRwuDSNCd1l9q2K-Ti3H-SFJ9SNR1Q1-IcRJ8AyDoZgXg94o_IWsP1N1o_AbMXztYOKt-29abK5RZQ2x4w52XNEwG",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state; 
    }
};

export default reducer;