// The following links may provide some assistance
// https://material-ui.com/components/text-fields/#api
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import React, { useState } from 'react';
import { Checkbox, Drawer, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
// import saveEdit from '../CustomList'

export function ListItemDrawer({post}) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [postData, setPostData] =useState({})



  const defaultState = {
    name: '',
    viewed: 'false',
    description: '',
    status: false,
  };

  const onChange = evt => {
    const { name, value } = evt.target;
    setPostData({...postData,[name]:value})
  }

 

  return (
    <Drawer
      open={drawerOpen}
      onClose={setDrawerOpen}
      anchor='right'
      variant='persistent'
      style={{ width: 200, flexShrink: 0 }}
      
    >
      <h2>This is the drawer</h2>
      {/* <Button variant="contained" post={saveEdit}>Edit</Button> */}
      <FormLabel>Task Name</FormLabel>
      <Input name='name' value={post.name} type='text' placeholder='Name' onChange={onChange} />
      <FormLabel>Description</FormLabel>
      <TextField  id='standard-basic' value={post.description} onChange={onChange} />
      <FormLabel>viewed</FormLabel>
      <Checkbox  inputProps={post.viewed} onChange={onChange} />
        <FormLabel>Status</FormLabel>
        <RadioGroup name='status'>
        <FormControlLabel value='new' control={<Radio />} label='New'/>
        <FormControlLabel value='in Progress' control={<Radio/>} label='In Progress'/>
        <FormControlLabel value='on hold' control={<Radio/>} label='On Hold'/>
        <FormControlLabel value='complete' control={<Radio/>} label='Complete'/>
        <FormControlLabel value='archived' control={<Radio/>} label='Archived'/>
        </RadioGroup>
        <Button variant="contained">Add</Button>
        <Button>Close</Button>
    </Drawer>
  );
}
