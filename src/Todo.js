import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


function Todo({task, completed, removeTodo, id}) {
  return (
     <ListItem>
       <Checkbox tabIndex={-1}  checked={completed}/>
       <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>
         {task}
       </ListItemText>
       <ListItemSecondaryAction>
         <IconButton aria-label='delete' onClick={() => removeTodo(id)}>
           <DeleteIcon />
         </IconButton>
         <IconButton aria-label='edit'>
           <EditIcon />
         </IconButton>
       </ListItemSecondaryAction>
     </ListItem>
  )
}

export default Todo;