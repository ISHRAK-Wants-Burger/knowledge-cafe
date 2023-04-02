import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Card from '../Card/Card';
import Time from '../Time/Time';
import './CafeDatas.css';
import toast, { Toaster } from 'react-hot-toast';

const CafeDatas = () => {
    const [cards, setCards] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( () => {
        // fetch('./public/jsonData.json')
        fetch('jsonData.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    const handleBookmark = (card) => {
        const alreadyExist = bookmark.find(b => b.id === card.id);
        const newBookmark = [...bookmark, card];
        setBookmark(newBookmark);

        if(alreadyExist) {
            toast.error("You Have Already Bookmarked This Blog");
        }
    }
    
    const handleTime = (card) => {
        const newTime = [...time, card];
        setTime(newTime);
    }
    
    return (
        <div className='cafe-container'>
            <div>
                {
                    cards.map(card => <Card key={card.id} card={card} handleBookmark={handleBookmark} handleTime={handleTime}></Card>)
                }
            </div>
            <div>
                 <Time time={time}></Time>
                    <Bookmark bookmark={bookmark}></Bookmark>
            </div>
            <Toaster />
        </div>
    );
};

export default CafeDatas;