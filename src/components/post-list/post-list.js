import React from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';
import '../post-list/post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete}) => {
    
    const elements = posts.map((item) =>{
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                 <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    }
    
    )

    return(
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;