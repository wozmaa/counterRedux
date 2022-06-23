import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash  = useSelector(state => state.cash)

  const addCash = () => {
    dispatch({type:"plus"})
  }

  const getCash = () => {
    dispatch({type:"minus"})
  }

  const reset = () => {
    dispatch({type:"reset"})
  }

  const random = () => {
    dispatch({type:"random"})
  }

  return (
   <div className='main'>
     <div className='mainCash'>{cash}</div>
     <div className='mainBtn' style={{display: "flex"}}>
       <button onClick={() => addCash()}>Добавить счетчик</button>
       <button onClick={() => getCash()}>Убавить счетчик</button>
       <button onClick={() => reset()}>Обнулить</button>
     </div>
     <div>
       <button onClick={() => random()}>Получить рандомное число</button>
     </div>
     <div className='text'>Мы будем ездить на роллс ройсах</div>
   </div>
  );
}

export default App;
