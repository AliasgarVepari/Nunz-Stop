import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { AxiosRequestConfig } from "axios";

interface GenericResponse<T>{
    count:number;
    results : T[];
}

const useData = <T>(urlEndpoint : string,requestConfig? : AxiosRequestConfig,depsArray? : any[]) => {

    const[data,setData] = useState<T[]>([]);
    const[error,setError] = useState();
    const[loading,isLoading] = useState(false);

    useEffect(()=>{
        isLoading(true);
        const abortController = new AbortController();
        
    
        ApiService.get<GenericResponse<T>>(urlEndpoint , {signal : abortController.signal , ...requestConfig}).then(
            (response)=>{
                setData(response.data.results);
                isLoading(false);
            }
        ).catch(
            (error)=>{
                if(abortController.signal.aborted) return;
                setError(error.message);
                isLoading(false); 
            }
        )

        return ()=>abortController.abort();
    },depsArray?[...depsArray]:[]);

    return {data,loading,error};
}

export default useData;
