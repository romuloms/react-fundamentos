import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import styles from './Post.scss';

export default function Post(props) {
  return (
    <article 
      className={
        props.post.removed
          ? styles.postDeleted
          : styles.post
          // classe dinamica
      }
    >
      <PostHeader 
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br/>
      <small>{props.post.subtitle}</small>
      <br />
      Likes: {props.post.likes}
    </article>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};