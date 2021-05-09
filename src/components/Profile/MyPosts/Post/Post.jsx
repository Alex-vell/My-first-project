import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2012/01/02/795406-20758182-2560-1440.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;