import React, {Component} from 'react';
import TodoItems from './TodoItems';
import './todolist.css';



class Todolist extends Component {
	constructor(props) {
	super(props)
	this.state = {
		items: [{key: 1, isChange: false, text: 'todo'}]
	 }
      this.addItem = this.addItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
    }

    addItem = (e) => {
     let itemArrey = this.state.items;
     if(this._inputElement!== "") {
     	itemArrey.push({
     		text: this._inputElement.value,
     		key: Date.now(),
            isChange: false
     	})
     	this.setState ({
     		items: itemArrey
     	})    
        this._inputElement.value = "";

        e.preventDefault()
      } 
    }

    deleteItem = function (key)  {
	    let filtredItems = this.state.items.filter(function (item) {
	        return (item.key !== key)
        })
        this.setState({
            items: filtredItems
        })
    }

   crossTodo = function (key) {
     let filtredItem = this.state.items.map(function (item) {
          if (item.key === key) {
              item.isChange = true
          }
       })
       this.setState({
           item: filtredItem
       })
     }


	render() {
	return (
    <div className='todoListMain'>
      <div className='header'>
        <form onSubmit={this.addItem}>
          <input  ref={(a) => this._inputElement = a}
           placeholder='Введите задачу'>
          </input>
          <button className="button" type='submit'>
          ok
          </button>
        </form>
      </div>
     <TodoItems className="TodoItems" entries={this.state.items}
                                      onCross={this.crossTodo}
                                      delete={this.deleteItem}/>

    </div>    
	  );	
  }
}
export default Todolist