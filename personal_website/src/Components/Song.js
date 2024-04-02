const Song = ({song, genre, title, albumArt, description }) => {
    return (             
            <div className="flex flex-col max-w-[600px] max-h-[600px] bg-slate-300 rounded-lg text-black mx-4 my-4 shadow-xl">
                <div className="flex">
                    <img src={albumArt} alt='album-art' className="w-32 h-32 border border-black ml-4 mt-8"/>
                    <div className="grid mx-28 mt-20">
                        <h1 className=" underline font-bold mb-8">{title}</h1>
                        <span className="font-bold">Genre: {genre}</span>
                    </div>

                </div>
                
                <div className="bg-white m-4 rounded-md shadow-xl">
                    <p className="p-4 ">{description}</p>
                    <audio id="audioPlayer" controls className='px-4 py-4 w-full'>
                        <source src={song} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
     );
}
 
export default Song;