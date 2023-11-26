import { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from './context';


function App() {
  const { state, dispatch } = useAppContext();
  const bool = useMemo(()=> !!state.input , [state.input])
  const ref = useRef();

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", payload: { value: e.target.value } })
  }
  const handleClick = () => {
 
    if (bool) {
      dispatch({ type: 'SUBMIT', payload: { item: { id: uuidv4(), name: state.input, completed: false } } });
    }
    else alert("Provide a task please ")
    ref.current.value = '';
  }

  return (

    <div className="bg-zinc-900 text-white  w-full h-screen  flex flex-col text-black  justify-center items-center fouc:ring-blue-300 focus:ring-2 ountline-none">
      <div className="mx-auto w-8/12  flex justify-center items-center my-5  ">
        <input ref={ref} onChange={handleChange} placeholder="Enter your task " name="taks" className="py-4 px-4 rounded-l-md  text-black " />
        <input type="submit" onClick={  () => handleClick()} value="Add task" className="px-6 py-4 bg-blue-500 rounded-r-md" />
      </div>

      <div className="w-8/12 mx-auto  bg-zinc-800">
        <List items={state.items}  />
      </div>

    </div>

  );

 
}


export function List({ items  , onCheck }) {
  const {dispatch} = useAppContext();
  const toggleCheck = (e,id) =>   dispatch({ type: 'SELECT', payload: { id: id, bool: e.target.checked } });
  return <ul className="text-white">
    {items.map((i, index) => 
    
    <li key={index} className={`py-3 px-5  flex items-center border-b border-white/10 ${i.completed ? 'line-through' : ''}`}>

      <input type="checkbox" checked={i.completed}  onChange={(e) => toggleCheck(e,i.id)} />
      {i.name}
    </li>)}


  </ul>;
}

export default App;
