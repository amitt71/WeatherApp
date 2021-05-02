import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { ApiError } from "../../types/apiError";
import { State } from "../../types/stateType";
import 'react-toastify/dist/ReactToastify.css';


const Toastify = () => {
    const apiError: ApiError = useSelector((state: State) => state.forecastsReducer.apiError);

    useEffect(() => {
        toast.info(apiError.message, {
            position: 'top-center',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }, [apiError]);

    return (
        <ToastContainer />
    )
}

export default Toastify;