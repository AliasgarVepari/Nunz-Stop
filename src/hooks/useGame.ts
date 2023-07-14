import useData from "./useData";


export interface Games {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform:Platform}[];
    metacritic : number;
  }

export interface Platform{
  id: number,
  name: string,
  slug: string,  
}
  

const useGame = (genre? : number) => {

  

  if(genre != undefined){
  
  return useData<Games>('/games',genre,[genre])
  }
  else
  return useData<Games>('/games')
}

export default useGame;