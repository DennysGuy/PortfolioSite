import BlogPage from "./BlogPage";

const DevilsTreasureBlog = ({isLoggedIn}) => {
  const bloglist = 'http://localhost:8000/devilstreasure_blogs';
  const createBlogPage = '/create-dt-blog'
  const header = "Devil's Treasure Blog"

  return(
    <div>
      <BlogPage isLoggedIn={isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default DevilsTreasureBlog;