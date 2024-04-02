import Song from "./Song";

const SongList = ({songs}) => {
    return ( <div>
                {songs.map((song) => (
                <Song title={song.title} genre={song.genre} albumArt={song.albumart} description={song.description} song={song.songfile}/>  
            ))}
            </div> 
    );
}
 
export default SongList;