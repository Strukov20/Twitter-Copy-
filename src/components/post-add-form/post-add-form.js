import React from 'react';
import PostList from '../post-list';
import '../post-add-form/post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return(
        <div className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="О чем ви думаете сечас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('Hello!')}>
                Добавить!</button>
        </div>
    )
}

export default PostAddForm;