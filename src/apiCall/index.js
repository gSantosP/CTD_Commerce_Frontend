import baseApi from "./api/baseApi";

export default async function apiCall(request){
    let responseItem
    

    try{
        
        if(request === "all")
            responseItem = await baseApi.get();
        else
            responseItem = await baseApi.get(`/${request}`);

    }catch(error){
        responseItem = {}
        
        responseItem.status = error.response.status;
        responseItem.msg = error.response.data.message;
    }

return responseItem

}
