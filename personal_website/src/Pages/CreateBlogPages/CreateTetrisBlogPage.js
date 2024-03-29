import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateTetrisBlogPage = () => {

  const endpoint = "http://localhost:8000/tetris-blog"
  const blog = "Tetris blog"

  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog}/>
    </div>
  );
};

export default CreateTetrisBlogPage;