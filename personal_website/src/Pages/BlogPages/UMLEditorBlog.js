import BlogPage from "./BlogPage";

const UMLEditorBlog = (props) => {
  const bloglist = 'http://localhost:8000/umleditor_blogs';
  const createBlogPage = '/umleditor-blog/createblog'
  const header = "UML Editor Blog"

  return(
    <div>
      <BlogPage isLoggedIn={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default UMLEditorBlog;