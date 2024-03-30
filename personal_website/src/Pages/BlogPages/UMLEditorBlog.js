import BlogPage from "./BlogPage";

const UMLEditorBlog = (props) => {
  const bloglist = 'http://localhost:8000/umleditor-blog';
  const createBlogPage = '/create-uml-editor-blog'
  const header = "UML Editor Blog"

  return(
    <div>
      <BlogPage isLoggedin={props.isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default UMLEditorBlog;