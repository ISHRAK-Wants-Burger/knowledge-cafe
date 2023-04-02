import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Card.css';


const Card = (props) => {
    const { authorName, publishDate, readTime, blogTitle, authorImage, blogCoverImage } = props.card;
    const handleBookmark = props.handleBookmark;
    const handleTime = props.handleTime;

    return (
        <div className='card-container'>
            <img className='cover-img' src={blogCoverImage} alt="" />
            <div>
                <div className='card-middle-div'>
                    <div className='card-middle-div-child'>
                        <img className='author-img' src={authorImage} alt="" />

                        <div>
                            <h3>{authorName}</h3>
                            <p className='paragraph'>{publishDate} (3Days ago)</p>
                        </div>
                    </div>

                    <p className='paragraph card-btn-responsive'>{readTime} min read<button onClick={() => handleBookmark(props.card)} className='card-btn'><FontAwesomeIcon className='paragraph' icon={faBookmark} /></button></p>
                </div>
            </div>
            
            <h1>{blogTitle}</h1>

            <p className='paragraph'>#beginners #programming</p>
            <button onClick={() => handleTime(props.card)}>Mark as read</button>
        </div>
    );
};

export default Card;