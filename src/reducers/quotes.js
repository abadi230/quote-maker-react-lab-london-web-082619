export default (state = [], action) => {
  let index, quote;
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
      // return [...state, action.quote]

    case 'REMOVE_QUOTE':
      // debugger
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
      // return state.filter(quote => quote.id !== action.quoteId) // its work
      
      case 'UPVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];
  
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes += 1 }),
          ...state.slice(index + 1)
        ];
  
      case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];
        if (quote.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, quote, { votes: quote.votes -= 1 }),
            ...state.slice(index + 1)
          ];
        }
        return state;

    default:
      return state
  }
  
}
