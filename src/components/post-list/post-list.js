import React from 'react';
import {ListGroup} from 'reactstrap';
import '../post-list/post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    
    const elements = posts.map((item) =>{
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                 <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                        />
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