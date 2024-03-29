import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateDTBlogPage = () => {

  const endpoint = "http://localhost:8000/devilstreasure-blog"
  const blog = "Devil's Treasure blog"

  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog}/>
    </div>
  );
};

export default CreateDTBlogPage;