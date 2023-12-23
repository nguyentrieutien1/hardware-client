import { useMutation } from "react-query"
import {IAuthLogin} from "../../types/index"
const handleLogin = async () => {
    console.log('Nguyen Trieu Tien');
    
}
export const authLoginMutation = (params: IAuthLogin) => {
    return useMutation(handleLogin, {
       onSuccess(data, variables, context) {
           
       }, 
    })
}