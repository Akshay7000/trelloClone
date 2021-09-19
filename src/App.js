import React, { useState,useEffect } from 'react'

import styled from 'styled-components'
import dataSet from './dataSet'
import Column from './Column'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    display : flex;
`

const App = () => {
  const [data, setData] = useState(dataSet)
  const [localData, setLocalData] = useState(false)
 useEffect(() => {
   var retrievedObject = localStorage.getItem('data');
   setData(JSON.parse(retrievedObject))
 }, [localData])
  const setTask = (tasks, columnId) => {
    
    var size = Object.keys(data.tasks).length;
    const task={...tasks,id:`task-${size+1}`}
    if(columnId==="column1")
    {const newTaskId = data.columns.column1.taskIds
    newTaskId.push(task.id)
    const newCol1={...data.columns.column1,taskIds:newTaskId}
     const newData = {
      tasks: {...data.tasks,[`task-${size+1}`]:task},
       columns: {...data.columns,column1:newCol1},
       columnOrder:data.columnOrder
     }
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData));

    }
    else if (columnId==="column2") {
      const newTaskId = data.columns.column2.taskIds
    newTaskId.push(task.id)
    const newCol1={...data.columns.column2,taskIds:newTaskId}
     const newData = {
      tasks: {...data.tasks,[`task-${size+1}`]:task},
       columns: {...data.columns,column2:newCol1},
       columnOrder:data.columnOrder
     }
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData));

    }
    else if (columnId==="column3") {
      const newTaskId = data.columns.column3.taskIds
    newTaskId.push(task.id)
    const newCol1={...data.columns.column3,taskIds:newTaskId}
     const newData = {
      tasks: {...data.tasks,[`task-${size+1}`]:task},
       columns: {...data.columns,column3:newCol1},
       columnOrder:data.columnOrder
     }
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData));

    }
    else if (columnId==="column4") {
      const newTaskId = data.columns.column4.taskIds
    newTaskId.push(task.id)
    const newCol1={...data.columns.column4,taskIds:newTaskId}
     const newData = {
      tasks: {...data.tasks,[`task-${size+1}`]:task},
       columns: {...data.columns,column4:newCol1},
       columnOrder:data.columnOrder
     }
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData));
    }
    else {
      console.log(data)
    }
    setLocalData(!localData)
}
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    //If there is no destination
    if (!destination) {return}
    
    //If source and destination is the same
    if (destination.droppableId === source.droppableId && destination.index === source.index) { return }
    
    //If you're dragging columns
    if (type === 'column') {
        const newColumnOrder = Array.from(data.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
        const newState = {
            ...data,
            columnOrder: newColumnOrder
        }
      setData(newState)
      localStorage.setItem('data', JSON.stringify(newState));
        return;
    }

    //Anything below this happens if you're dragging tasks
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //If dropped inside the same column
    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...start,
            taskIds: newTaskIds
        }
        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn
            }
        }
      setData(newState)
      localStorage.setItem('data', JSON.stringify(newState));
      
        return;
    }

    //If dropped in a different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds
    }
    
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds
    }

    const newState = {
        ...data,
        columns: {
            ...data.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    }
    localStorage.setItem('data', JSON.stringify(newState));

    setData(newState)
}
  return (
    <>
      <AppBar position="static" sx={{alignItems:"center" ,marginBottom:"50px"}}>
      <Toolbar >Trello Deshboard</Toolbar>
    </AppBar>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {data.columnOrder.map((id, index) => {
              const column = data.columns[id]
              const tasks = column.taskIds.map(taskId => data.tasks[taskId])

              return <Column key={column.id} column={column} tasks={tasks} index={index} setTask={setTask}/>
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
      </DragDropContext>
      </>
  )
}
export default App;
