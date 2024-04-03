import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateTetrisBlogPage = ({author, avatar, blogPage}) => {

  const endpoint = "http://localhost:8000/tetris_blogs"
  const blog = "Tetris blog"

  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog} author={author} avatar={avatar} blogPage={blogPage}/>
    </div>
  );
};

export default CreateTetrisBlogPage;