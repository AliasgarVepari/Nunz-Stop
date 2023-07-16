import useData from "./useData";
import { GameQuery } from "../App";


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
  

const useGame = (gameQuery : GameQuery) => 
  useData<Games>(
    '/games',
    {
      params : {
        genres : gameQuery?.genre?.id,
        platforms:gameQuery?.platform?.id,
        ordering:gameQuery?.orderby?.id,
        search : gameQuery?.search,
      }
    },[gameQuery])


export default useGame;