import BlogPage from "./BlogPage";

const WTCBlog = (props) => {
  const bloglist = 'http://localhost:8000/wtc_blogs';
  const createBlogPage = '/create-wtc-blog'
  const header = "Welcome To Cheney Blog"

  return(
    <div>
      <BlogPage isLoggedIn={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default WTCBlog;