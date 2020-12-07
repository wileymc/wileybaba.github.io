import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card } from './base';

const Container = styled.div`
  a:hover {
    color: ${(props) => props.theme.colors.blueLight};
  }
`;

const Listing = styled.article`
  h3 {
    margin: 0;
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
    <Container>
      {postList.map((post) => (
        <Link
          to={post.path}
          key={post.title}
          style={{ textDecoration: 'none' }}
        >
          <Card style={{ marginBottom: '1rem' }}>
            <Listing>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </Listing>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default PostListing;
