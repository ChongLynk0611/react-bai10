import React, {Component} from 'react';
import './style.css';


class ToDoItem extends Component{
    render(){
        let name = this.props.name;
        let DongChan = this.props.DongChan;
        if(DongChan===true){
            return(
                <tr className="DongChan">
                    <th>{name}</th>   
                </tr>
            );
        }
        else{
            return(
                <tr>
                    <th>{name}</th>   
                </tr>
            );
        }
        
    }
}

export default ToDoItem;