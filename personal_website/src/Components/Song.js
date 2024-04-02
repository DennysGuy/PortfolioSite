const Song = ({song, title, albumArt, description }) => {
    return (             
        <div className='grid justify-center'>
            <div className="flex flex-col max-w-[600px] max-h-[600px] bg-slate-300 rounded-lg text-black mx-4 my-4 shadow-xl ">
                <div className="flex">
                    <img src={albumArt} alt='album-art' className="w-32 h-32 border border-black ml-4 mt-8"/>
                    <h1 className=" underline font-bold mx-28 mt-20">{title}</h1>
                </div>
                
                <div className="bg-white m-4 rounded-md shadow-xl">
                    <p className="p-4 ">{description}</p>
                    <audio id="audioPlayer" controls className='px-4 py-4 w-full'>
                        <source src="https://www.mediafire.com/file/sor3tgh92j9kmxj/Accelerate.mp3/file" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div> 
     );
}
 
export default Song;