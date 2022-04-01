import React from 'react';
import {useParams} from 'react-router-dom';


function BookDetail() {
    const {id} = useParams();
    console.log('Book detail param id', id);
    return (
        <div>
            Book Detail
        </div>
    );
}

export default BookDetail;