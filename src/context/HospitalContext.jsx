import { useContext, createContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from './HospitalFunctions'

const HospitalContext = createContext();
export function HospitalProvider({ children }) {

    const initialstate = {
        loading: false,
        hospital: [],
    }

    const [state, dispatch] = useReducer(reducer, initialstate)
    const getBlogs = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get("http://localhost:3001/hospital");
            const blogs = await res.data;
            dispatch({ type: "SET_API_DATA", payload: blogs })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }
    
    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <HospitalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </HospitalContext.Provider>
    )
}
function useHospital() {
    return useContext(HospitalContext)
}

export default useHospital;
