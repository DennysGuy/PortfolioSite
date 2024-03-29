import BlogPage from "./BlogPage";

const UMLEditorBlog = (isLoggedIn) => {
  const bloglist = 'http://localhost:8000/umleditor-blog';
  const createBlogPage = '/create-uml-editor-blog'
  const header = "UML Editor Blog"

  return(
    <div>
      <BlogPage isLoggedin={isLoggedIn} createBlogPage={createBlogPage} blogList={bloglist} pageHeader={header} />
    </div>

  );

};

export default UMLEditorBlog;