import React from 'react';
import PostList from '../post-list';

const PostAddForm = () => {
    return(
        <from className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="О чем ви думаете сечас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить!</button>
        </from>
    )
}

export default PostAddForm;