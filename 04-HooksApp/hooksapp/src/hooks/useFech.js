import { useEffect, useState } from "react";

function useEfectApi(url) {
const [state, setState] = useState({
  data:null,
  isloading: false,
  error:null
});
  const getFetch = async () => {
    setState({
      ...state,
      isloading: true
    })
    const response = await fetch(url);
    const data = await response.json();
     console.log(data);

    setState({
      data: data,
      isloading: false,
      error: null
    })
  }
  useEffect(() => {
    getFetch();
  },[url]);
    return { 
     data: state.data,
     isloading: state.isloading,
      error: state.error
    };
}

export default useEfectApi;