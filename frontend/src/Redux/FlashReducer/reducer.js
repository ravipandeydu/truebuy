import * as types from "./actionTypes"

const initialState={
   flashRecords:[],
    isLoading:false,
    isError:false
}


const reducer=(oldState=initialState,action)=>{
    const {type, payload}=action;
    switch (type) {
        case types.GET_FLASH_RECORD_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false
            }
            case types.GET_FLASH_RECORD_SUCCESS:
                return{
                    ...oldState,
                    flashRecords:payload,
                    isLoading:false,
                    isError:false
                }
                case types.GET_FLASH_RECORD_FAILURE:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:true
                    }
        default:
            return oldState
    }

}

export {reducer}