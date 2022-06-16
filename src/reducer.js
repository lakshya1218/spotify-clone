export const initialState= {
  user:null,
  playlists:[],
  playing:false,
  item:null,
  // token:'BQBQYKvRWbOG9EDXhcQ3cVjL19E2JTBg2wvEPuNlO87RV3o2Yod7Gl-rhQkaiq4He-OzWcc-f2FLGpptvEAVbiwi-RprKiLpai-caGVR7KroViqI636oX8AXYIPj7tXRvoiQV97ziUEYSeeWHUbFtXUHtqYn_6kYLzE7e6xzAuKTozBC9uro9JKkSUynA0s71fEltCRg06LotU8Aig'
};

const reducer=(state,action)=>{
    console.log(action);

   // Action->type,[payload]

    switch(action.type){
      case'SET_USER':
        return{
          ...state,
          user: action.user
  };

  case 'SET_TOKEN':
    return {
        ...state,
        token: action.token
    };

    case 'SET_PLAYLISTS':
      return{
         ...state,
         playlists: action.playlists,
      };


  deault:
    return state; 

}
}


  export default reducer;