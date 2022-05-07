import React ,{useState} from 'react'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';
import { useNavigate } from "react-router-dom";
import {useStateValue} from './StateProvider'
import { actionTypes } from './reducer';


function Search(props){
 let bu = 0;
  if(props.button===false){
    bu = false;
  }
  else{
    bu =true;
  }
  let navigate = useNavigate();
  const [{ term }, dispatch] = useStateValue();
    const[input , setInput] = useState('');
    
    
    
    const search = e=>{
      e.preventDefault();
      
      dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term:input
      })

      navigate("/search");
      
    }

  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className="search__inputIcon"/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon/>
        </div>
       
      {bu?(<div className="search__button">
          <button onClick={search}>Google Search</button>
          <button>I am feeling Lucky</button>
        </div>):(
        <div className="search__button__hide">
          <button onClick={search}>Google Search</button>
          <button>I am feeling Lucky</button>
        </div> 
         )}
    </form>
  )
}

export default Search