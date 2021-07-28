const NEWPARTNER = 'conversation/NEWPARTNER';
const NEWMESSAGE = 'conversation/NEWMESSAGE';
const RECEIVED = 'conversation/RECEIVED';

export const insertPartner = (partner) => ({ type: NEWPARTNER, payload: partner });
export const insertMessage = (msg) => ({ type: NEWMESSAGE, payload: msg });
export const receive = (msg) => ({ type: RECEIVED, payload: msg });

const initialState = [];

const Conversation = (state = initialState, action) => {
  switch (action.type) {
    case NEWPARTNER:
      // console.log(action.payload.list);
      state[action.payload.partner] = [...action.payload.list];
      return { ...state };
    case NEWMESSAGE:
      // console.log(action.payload);
      state[action.payload.receiver_id] = [...state[action.payload.receiver_id], action.payload];
      return { ...state };
    case RECEIVED:
    // console.log(action.payload);
    // if (state[action.payload.author] === undefined) {
    //   state[action.payload.author] = [action.payload];
    // } else {
    //   state[action.payload.author] = [...state[action.payload.author], action.payload];
    // }
    // return { ...state };
    default:
      return state;
  }
};

export default Conversation;
