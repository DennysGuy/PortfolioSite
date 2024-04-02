import thelaststand from '../Music/The_Last_Stand.wav'
import Song from '../Components/Song';
const Music = () => {
    return ( 
        <div>
            <h1 className="page-header">Music</h1>
            <div className="grid justify-center">
 
            <p className="my-20 max-w-[600px]">Below is a small show case of some of the music I've written - either for personal projects or other people's projects. Hit play on any of the songs to listen to my original pieces. Enjoy!</p>
 
            <Song song={"https://www.mediafire.com/file/sor3tgh92j9kmxj/Accelerate.mp3/file"} title={"The Last Stand"} description={"this is a temporary description"}/>
            </div>
        </div>
        
        

     );
}
 
export default Music;