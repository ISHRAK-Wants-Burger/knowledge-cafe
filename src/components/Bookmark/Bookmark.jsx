import React from 'react';
import './Bookmark.css';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    return (
        <div className='bookmark-container'>
            <h3>Bookmarked Blogs: {bookmark.length}</h3>
            <div>
                {
                    bookmark.map(bookmarked => {
                        return(
                            <h4 className='book-title' key={bookmarked.id}>{bookmarked.blogTitle}</h4>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Bookmark;