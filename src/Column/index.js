import React from "react";
import styled from "styled-components";
import Task from "../Task";
import { Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Droppable, Draggable } from "react-beautiful-dnd";
import NewTask from "../NewTask"
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Heading = styled.div`
display: flex;
flex-direction: row;
border-bottom: 1px solid lightgray;
padding: 8px;`;


const Title = styled.h3`
padding-Left: 8px;
width:90%;
`;
const Icon = styled.h3`
float:right;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
  min-height: 100px;
`;

function Column(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = (task,columnId) => {
        
        setOpen(false);
        props.setTask(task,columnId)
      };

    return (
      <>
            <NewTask handleClose={handleClose} handleSave={handleSave} open={open} columnId={props.column.id}/>
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
                  <Heading {...provided.dragHandleProps}>
                      <Title>
            {props.column.title} </Title>
            <Icon onClick={handleClickOpen}>
              <Badge color="primary">
                <AddIcon color="action" />
              </Badge>
            </Icon>
          </Heading>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
            </Draggable>
            </>
  );
}

export default Column;
