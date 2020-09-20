import React, {Component} from 'react';
import ToDoItem from '../ToDoItem/index';
import './style.css';
class ToDo extends Component{
    render(){
        let listToDo = this.props.ToDo;
        return(
            <table>
                {listToDo.map((item,index)=>{
                    
                    if(index % 2===0){
                        return <ToDoItem name={item} DongChan ={true} key={index} />
                    }
                    else{
                        return <ToDoItem name={item} DongChan={false} key={index} />
                    }
                    
                        
                    
                })}
            </table>
            
        );
    }
}

export default ToDo;