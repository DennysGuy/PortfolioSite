import BlogPage from "./BlogPage";

const TetrisBlog = (props) => {
  const bloglist = 'http://localhost:8000/tetris_blogs';
  const createBlogPage = '/tetris-blog/createblog'
  const header = "Tetris Blog"

  return(
    <div>
      <BlogPage isLoggedIn={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default TetrisBlog;