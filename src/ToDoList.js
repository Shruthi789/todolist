import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Tasks=[
  "Work on Wordpress",
  "Organize office main department",
  "Error Solved in HTML Template"
];

 const innerTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '@media (max-width:320px)':{
            width:'100%'
          },
        },
      }
    },
  }
 });

function AddTask(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState(Tasks);
    const deleteAction=(id)=>{
       const filteredTasks=tasks.filter((value,index)=>index!==id);
       setTasks(filteredTasks);
    };
    const submitHandler=(event)=>{event.preventDefault();setTasks([...tasks,task]); setTask("");}
    return(
    <ThemeProvider theme={innerTheme}>
      <div className="tasks">
      <br/>
      <h1 className="heading">TASKS</h1>
      <div>
    <form onSubmit={submitHandler} className='form-style'>
      <TextField variant="outlined" label="New Task..." value={task} onChange={(event)=>setTask(event.target.value)} size='small' required/>
      <Button variant="contained" className="button-style" color="success" type="submit" size='medium'>Add Task</Button>
      </form>
      {tasks.map((task,index)=>(<TaskBox key={index} task={task} deleteButton={ <IconButton aria-label="delete" size="small" onClick={()=>{deleteAction(index)}}>
        <CloseIcon fontSize="small" color="error" />
      </IconButton>}/>))}
      </div>
      </div>
    </ThemeProvider>
    );
  }
  
  function TaskBox({task,deleteButton}){
    const styles={
      backgroundColor:"#f7f7f7",
      height:"50px",
      textAlign:'left',
      display:'flex',
      alignItems:'center',
      gap:'3px',
      margin:"10px 0px"
    };
    return <div style={styles}>{deleteButton} {task}</div>
  }
  export {AddTask};