import thelaststand from '../Music/The_Last_Stand.wav'
import SongList from '../Components/SongList';
import useFetch from '../Components/useFetch';
const Music = () => {
    
    const {data: songs, isPending, error} = useFetch('http://localhost:8000/music')
 
    return ( 
        <div>
            <h1 className="page-header">Music</h1>
            
            <div className="grid justify-center p-16">
                <p className="max-w-[600px]">Below is a list of music projects I've made - for personal or client projects. Click play on any of the players to hear my music. Song will range from a variety of different genres for a variety of applications including: video games, personal songs, and short films. Enjoy!</p>
                <div className="mx-8 pt-8">   
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading Projects...</div>}
                    {songs && <SongList songs={songs}/>}
                </div>
            </div>
          
        </div>
        
        

     );
}
 
export default Music;