import { useContext, createContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from './HospitalFunctions'

const HospitalContext = createContext();
export function HospitalProvider({ children }) {

    const initialstate = {
        loading: false,
        hospital: [],
        emerhospital : [],
        filter:{
            emergency: "",
        }
    }

    const [state, dispatch] = useReducer(reducer, initialstate)
    const getHospitals = async () => {
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

    const updateFilterValue = (event) =>{
        let value = event.target.value;
        return dispatch({type: 'UPDATE_FILTER_VALUE' ,payload:{value}})
    }

    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCTS'})
    },[state.filter])
    
    useEffect(() => {
        getHospitals()
    }, [])
    return (
        <HospitalContext.Provider value={{ ...state, dispatch, updateFilterValue }}>
            {children}
        </HospitalContext.Provider>
    )
}
function useHospital() {
    return useContext(HospitalContext)
}

export default useHospital;
