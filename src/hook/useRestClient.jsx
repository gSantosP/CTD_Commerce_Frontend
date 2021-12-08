import respClient from "../services/restClient";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function useRestClient(url){
    const [response , setResponse] = useState();

    useEffect(() => {
        async function getResponse(){
            const resp = await respClient.get("/category");
            setResponse(resp);
        }

        try{
            getResponse();
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [ url ]);

    return response;
}