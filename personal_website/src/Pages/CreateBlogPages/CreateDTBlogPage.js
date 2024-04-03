import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateDTBlogPage = ({author, avatar, blogPage}) => {

  const endpoint = "http://localhost:8000/devilstreasure_blogs"
  const blog = "Devil's Treasure blog"

  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog} author={author} avatar={avatar} blogPage={blogPage}/>
    </div>
  );
};

export default CreateDTBlogPage;