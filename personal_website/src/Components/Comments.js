import { DiscussionEmbed } from "disqus-react";

const Comments = ({post}) => {
    const pageUrl = typeof window != 'undefined' ? window.location.href:""
    const disqusCont = {
        url:pageUrl,
        identifier: post.slug,
        title: post.title

    }
    return (  
        <DiscussionEmbed shortname="matt-matriciano-blog" config={disqusCont}/>
    );
}
 
export default Comments;