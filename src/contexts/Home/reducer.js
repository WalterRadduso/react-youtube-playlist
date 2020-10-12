import types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: action.data };
    case types.GET_VIDEOS:
      return { ...state, loading: false, videos: action.data };
    case types.GET_VIDEOS_ERROR:
      return { ...state, loading: false, videos: null, videosError: action.data };
    case types.SELECT_VIDEO:
      return { ...state, loading: false, videoId: action.data };
    default:
      return state;
  }
};

export default reducer;
