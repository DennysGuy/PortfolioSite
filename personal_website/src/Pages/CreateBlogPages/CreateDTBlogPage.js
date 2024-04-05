import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateDTBlogPage = ({author, avatar, blogPage}) => {

  /**
   * after learning about the useParam hook, I now know that I can make this code more scalable
   * perhaps, in the future, I will implement a single CreateBlog page where the endpoint information is dynamically retrieved.
   */
  const endpoint = "http://localhost:8000/devilstreasure_blogs"
  const blog = "Devil's Treasure blog"

  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog} author={author} avatar={avatar} blogPage={blogPage}/>
    </div>
  );
};

export default CreateDTBlogPage;