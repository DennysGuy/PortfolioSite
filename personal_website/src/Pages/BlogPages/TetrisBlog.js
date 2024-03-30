import BlogPage from "./BlogPage";

const TetrisBlog = (props) => {
  const bloglist = 'http://localhost:8000/tetris-blog';
  const createBlogPage = '/create-tetris-blog'
  const header = "Tetris Blog"

  return(
    <div>
      <BlogPage isLoggedin={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default TetrisBlog;