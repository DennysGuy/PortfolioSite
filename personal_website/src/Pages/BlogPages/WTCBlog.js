import BlogPage from "./BlogPage";

const WTCBlog = (props) => {
  const bloglist = 'http://localhost:8000/wtc-blog';
  const createBlogPage = '/create-wtc-blog'
  const header = "Welcome To Cheney Blog"

  return(
    <div>
      <BlogPage isLoggedin={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default WTCBlog;