import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import CardHeader from '@mui/material/CardHeader';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import Check from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { red } from '@mui/material/colors';

const Container = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;
function Task(props) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const BasicCard = (props) => {
    
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent >
          <Typography
            sx={{ fontSize: 14, borderBottom: "1px solid lightGray" }}
            color="text.secondary"
            gutterBottom
          >
            {props.data.heading}
          </Typography>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500],width: 50, height: 50 }} aria-label="recipe">
           {props.data.assignTo?props.data.assignTo[0]:0}
          </Avatar>
        }
       
                    title={props.data.assignTo}
        subheader={props.data.content}
      />
          
        </CardContent>
        <CardActions style={{ borderTop: "1px solid lightGray" }}>
          <Badge color="primary">
            <Check color="action" />
          </Badge>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 24, height: 24 }}
              src="/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              sx={{ width: 24, height: 24 }}
              src="/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              sx={{ width: 24, height: 24 }}
              src="/static/images/avatar/3.jpg"
            />
          </Stack>
        </CardActions>
      </Card>
    );
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <BasicCard data={props.task} />
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
