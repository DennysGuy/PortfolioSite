import { Link } from "react-router-dom";

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
                    <Link to={song} className="m-4 text-blue-600 hover:underline">Link to song</Link>
                </div>
            </div>
     );
}
 
export default Song;