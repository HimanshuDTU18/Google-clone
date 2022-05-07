import{useState,useEffect} from 'react'



function useGoogleSearch(term) {
    const [data ,setData]=useState(null);
    const Context = 'bb69ac89bfbe923cf';

    useEffect(()=>{

        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=AIzaSyDt-Tzz6MsOosx2KrAb912Go4xarw7vqmk&cx=${Context}&q=${term}`
                )
                .then(res =>res.json())
                .then(result=>{
                    setData(result);
                })
        }
        fetchData();
    },[term])

    return{data}

}   
   


export default useGoogleSearch