import useData from "./useData";

export interface Platform{
  id: number,
  name: string,
  slug: string,  
}
  

const usePlatfrom = () => {


  return useData<Platform>('/platforms');
}

export default usePlatfrom;