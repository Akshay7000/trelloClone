import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
 
  const handleClose = () => {
    props.handleClose(false);
  };
  const [user, setUser] = React.useState("");
  const [content, setContent] = React.useState("");
  const [heading, setHeading] = React.useState("");
  const handleChange = (event) => {
    setUser(event.target.value);
    };
    const handleSave = () => {
        var task = { id: `${Date.now()}`, content: content, heading: heading, assignTo: user }
        
       props.handleSave(task,props.columnId)
      };
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Task
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List sx={{ margin: "50px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            autoFocus
            margin="dense"
            label="Heading"
            type="name"
            fullWidth
            onChange={(e) => {
              setHeading(e.target.value);
            }}
          />
          <Divider />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            margin="dense"
            variant="outlined"
            label="Content"
            type="text"
            fullWidth
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Divider />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="User"
              onChange={handleChange}
            >
              <MenuItem value={"Remy Sharp"}>Remy Sharp</MenuItem>
              <MenuItem value={"Travis Howard"}>Travis Howard</MenuItem>
              <MenuItem value={"Cindy Baker"}>Cindy Baker</MenuItem>
            </Select>
          </FormControl>
        </List>
      </Dialog>
    </div>
  );
}
