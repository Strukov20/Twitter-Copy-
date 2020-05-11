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
                {label: 'Going to Learn React', important: true,like: false, id: 1},
                {label: 'That is so Good!', important: false,like: false, id: 2},
                {label: 'I need a break...', important: false,like: false, id: 3}
            ],
            term: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this); 
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);



            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old =  data[index];
            const newItem = {...old, important: !old.important}


            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }

            
        })
    }
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old =  data[index];
            const newItem = {...old, like: !old.like}


            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }

            
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((items) => {
            return items.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    render() {  
        const {data, term} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.searchPost(data, term);

        return (
            <div className="app">
                <AppHeader
                liked ={liked}
                allPosts={allPosts}
                />
                <div className="saarch-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    /> 
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
}
}


