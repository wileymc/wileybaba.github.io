import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.frontmatter.slug,
        // tags: postEdge.node.frontmatter.tags,
        // categories: postEdge.node.frontmatter.categories,
        // cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        // date: postEdge.node.fields.date,
        // excerpt: postEdge.node.excerpt,
        // timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const postList = getPostList();
  return (
    <div>
      {
        /* Your post list here. */
        postList.map((post) => (
          <Link to={post.path} key={post.title}>
            <article>
              <div>
                <h3>{post.title}</h3>
                {/* <div >
                  {post.date} &mdash; <span>{post.categories.join(' / ')}</span>{' '}
                  &mdash; {post.timeToRead} Min Read{' '}
                </div> */}
                {/* <p>{post.excerpt}</p> */}
              </div>
            </article>
          </Link>
        ))
      }
    </div>
  );
};

export default PostListing;
