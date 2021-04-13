import React, {Component} from 'react';
import './todolist.css';
import FlipMove from 'react-flip-move'


class TodoItems extends Component {
	constructor(props) {
	 super(props);

	 this.createTasks = this.createTasks.bind(this);

   }

     deleteItem = function (key) {
	    this.props.delete(key)
     }



  createTasks(item, index, ) {

        let classes = ['']

    /*  function crossTodo(isChsnge = false) {
          if(isChsnge) {
              classes = ['cross']
          } else {
              classes = ['']
          }
          return classes
      }
*/

 return <li onClick={() => console.log('key', item.key, 'classes', classes)}
            className={classes}
            key={item.key}
            index={index}
             >
            {index + 1 + '.'} {item.text}
            <button onClick={() => this.deleteItem(item.key)} className="buttonDel" type='submit'>
               &times;
            </button>
        </li>
  }

   render() {
   	let todoEntries = this.props.entries;
   	let listItems = todoEntries.map(this.createTasks);

   	return (
     <ul className='theList'>
      <FlipMove duration={500} easing="ease-out">
       { listItems }
      </FlipMove>
     </ul>
   	)
   }
 }
   export default TodoItems;


 