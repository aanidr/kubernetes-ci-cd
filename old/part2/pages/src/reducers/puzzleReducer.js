import * as types from '../actions/actionTypes';

const initialState = {
  id: '',
  puzzleData: [],
  fromCache: false,
  fromMongo: false,
  sendingData: false,
  dataLocation: ''
};

export default function puzzleReducer (state = initialState, action) {
  switch (action.type) {
    case types.puzzle.GET_PUZZLE_DATA_SUCCESS: {
      const dataLocation = action.data.fromCache ? 'cache' : 'mongo';
      return Object.assign({}, state, {
        id: action.data.id,
        puzzleData: action.data.words,
        dataLocation
      });
    }
    case types.puzzle.GET_PUZZLE_DATA_FAILURE: {
      return state;
    }
    case types.puzzle.SUBMIT_PUZZLE_DATA_SUCCESS: {
      return Object.assign({}, state, {
        id: action.data.id,
        puzzleData: action.data
      });
    }
    case types.puzzle.SUBMIT_PUZZLE_DATA_FAILURE: {
      return state;
    }
    case types.puzzle.SENDING_DATA: {
      return Object.assign({}, state, {
        sendingData: action.data
      });
    }
    case types.puzzle.FROM_CACHE: {
      return Object.assign({}, state, {
        fromCache: action.data
      });
    }
    case types.puzzle.FROM_MONGO: {
      return Object.assign({}, state, {
        fromMongo: action.data
      });
    }
    default: {
      return state;
    }
  }
}
