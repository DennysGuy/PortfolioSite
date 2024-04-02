import thelaststand from '../Music/The_Last_Stand.wav'
import SongList from '../Components/SongList';
import useFetch from '../Components/useFetch';
const Music = () => {
    
    const {data: songs, isPending, error} = useFetch('http://localhost:8000/music')
 
    return ( 
        <div>
            <h1 className="page-header">Music</h1>
            <div className="grid justify-center">   
                {error && <div>{error}</div>}
                {isPending && <div>Loading Projects...</div>}
                {songs && <SongList songs={songs}/>}
            </div>
        </div>
        
        

     );
}
 
export default Music;