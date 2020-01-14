import React from 'react';
import { Link } from '@reach/router'
import { formatTimeDate } from './utils/utils'

const ArtSmCard = ({ article }) => {
  const { 
    title, author, 
    created_at, 
    votes, comment_count,
    article_id
  } = article;
  return (
    <li className='art-sm-card'>
      


      <div className='title-author'>
        <Link to={`/articles/${article_id}`} >
          <span>{title}</span>{author}
        </Link>
      
      </div>
      <div className='created-at'>{formatTimeDate(created_at)}</div>
      <div className='counts'>
        <p>votes: {votes} comments: {comment_count}</p>
        {/* <p></p>   */}
      </div>
    </li>
    // <hr />
  );
};

export default ArtSmCard;