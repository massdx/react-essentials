import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const context = createContext();

const { Provider , Consumer } = context;


const initialState = {
  items: [
    { id: uuidv4(), name: 'Best practie of react', completed: false },
    { id: uuidv4(), name: 'Clean code and algorithmic is Java', completed: false },],

  all: [
    { id: uuidv4(), name: 'Best practie of react', completed: false },
    { id: uuidv4(), name: 'Clean code and algorithmic is Java', completed: false },
  ],
  input: ''
}



function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT':

      return {
        ...state,
        items: [action.payload.item, ...state.items],
        input: ''
      };
    case 'CHANGE':
      return {
        ...state,
        input: action.payload.value
      }
    case 'SELECT':
      const updated = state.items.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, completed: action.payload.bool }
        }
        return i;
      });
      return {
        state,
        items: updated
      }
    default:
      throw new Error();
  }
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}


export const useAppContext = () => {
  return useContext(context);
}
export default AppProvider;     