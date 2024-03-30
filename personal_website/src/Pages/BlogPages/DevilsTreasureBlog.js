import BlogPage from "./BlogPage";

const DevilsTreasureBlog = (props) => {
  const bloglist = 'http://localhost:8000/devilstreasure-blog';
  const createBlogPage = '/create-dt-blog'
  const header = "Devil's Treasure Blog"

  return(
    <div>
      <BlogPage isLoggedin={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default DevilsTreasureBlog;