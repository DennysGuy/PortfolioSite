import thelaststand from '../Music/The_Last_Stand.wav'
import SongList from '../Components/SongList';
import useFetch from '../Components/useFetch';
const Music = () => {
    
    const {data: songs, isPending, error} = useFetch('http://localhost:8000/music')
 
    return ( 
        <div>
            <h1 className="page-header">Music</h1>
            <div className="grid justify-center">
 
            <p className="my-20 max-w-[600px]">Below is a small show case of some of the music I've written - either for personal projects or other people's projects. Hit play on any of the songs to listen to my original pieces. Enjoy!</p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading Projects...</div>}
            {songs && <SongList songs={songs}/>}
            </div>
        </div>
        
        

     );
}
 
export default Music;