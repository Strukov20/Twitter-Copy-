import React, { Component } from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css'
//import '../app-header/app-header.css'
//import '../post-add-form/post-add-form.css'
//import '../post-list/post-list.css'
//import '../post-list-item/post-list-item.css'
//import '../post-status-filter/post-status-filter.css'
//import '../search-panel/search-panel.css'

//




export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Going to Learn React', important: true, id: 1},
                {label: 'That is so Good!', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this); 

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {  
        return (
            <div className="app">
                <AppHeader/>
                <div className="saarch-panel d-flex">
                    <SearchPanel/> 
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
}
}


