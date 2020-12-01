import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card } from './base';

const Listing = styled.article`
  a {
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

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
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
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
          <Link
            to={post.path}
            key={post.title}
            style={{ textDecoration: 'none' }}
          >
            <Card style={{ marginBottom: '1rem' }}>
              <Listing>
                <h3 style={{ textDecoration: 'underline solid dodgerblue' }}>
                  {post.title}
                </h3>
                <p>{post.date}</p>
                <p>{post.excerpt}</p>
              </Listing>
            </Card>
          </Link>
        ))
      }
    </div>
  );
};

export default PostListing;
