export default function HospitalFunctions(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'SET_API_DATA':
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                hospital: action.payload,
                emerhospital: action.payload
            }
        case 'UPDATE_FILTER_VALUE':
            const { value } = action.payload;
            return {
                ...state,
                filter: {
                    emergency: value
                }
            }
        case 'FILTER_PRODUCTS':
            let { hospital } = state;
            let filtered = [...hospital]
            const emergency = state.filter.emergency
            if (emergency.toLowerCase() != 'all')
            filtered = filtered.filter((i) => {
                return i.type === emergency;
            })
            return {
                ...state,
                emerhospital : filtered
            }
    }
}
