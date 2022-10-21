import ApiHelper from "../apiHelper";

export async function AuthLogin (data){
    const result  = await ApiHelper.post('/login',data);
    console.log(result,"result sdsds")
    return result;
}

export async function AuthSignup (data){
    const url = '/signup';
  
    const response = await ApiHelper.post(url, data);
  
    return response;
}
