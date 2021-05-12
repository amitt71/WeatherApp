import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { IerrorObject } from "../../types/errorMessageObject";
import { State } from "../../types/stateType";
import 'react-toastify/dist/ReactToastify.css';


const Toastify = () => {
    const errorMessage = useSelector((state: State) => state.forecastsReducer.errorMessage);
   
    useEffect(() => {
       
        toast.dark(errorMessage.message, {
            position: 'top-center',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
        })
        
    }, [errorMessage]);

    return (
        <ToastContainer  />
    )
}


export default Toastify;