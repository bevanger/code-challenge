import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, stepContentClasses} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemDrawer } from '../ListItemDrawer';
import fetchPost from '../Services/fetchPost';


export default function CustomList() {

  const [posts, setPosts] =useState([])
  const [isLoading, setIsLoading] =useState('loading...')

  useEffect(()=>{
    if (posts.length === 0) {
      setTimeout (fetchPost(setPosts), setIsLoading(isLoading), 10000)
    }
  },[posts])

  const [currentPost, setCurrentPost] =useState({})

  const onClick = (post) => { 
     setCurrentPost(post)
  }

  
  const onDelete = (postToDelete) => {
    const id = postToDelete
    const newPostList = posts.filter((post) => {return post.id !== id})
    setPosts(newPostList)
  }

  // const [editing, setEditing] = useState(false);

  // const toggleEdit = (value) => {
  //   setEditing(value);
  // };

  // const saveEdit = (postToEdit) => {
  //   const id = postToEdit
  //   let itemIndex
  //   const postListCopy = [...posts]
    
  //     posts.find((post, index) => {
  //         itemIndex = index
  //         return post.id === id
  //     })
    
  //     postListCopy[itemIndex] = postToEdit
    
  //     setPosts(postListCopy)
  // }

  // const onAddPost = post => {
  //   post.id = posts.length +1;
  //   setPosts([...posts, post])
  // }


  return (
    <div>
      <List>
        {posts?.map((post) => (
          <>
            <ListItem key={post.id} onClick={() => onClick(post)}>
              <ListItemText primary={post.name}/>
              <ListItemText primary={post.description}/>
              <ListItemText primary={post.status}/>
              <ListItemText>
                   {post.viewed === true ? <ListItemIcon>
                              <CheckBoxIcon/>
                            </ListItemIcon> : 
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>}
              </ListItemText>
            </ListItem>
            <ListItemButton variant="contained" onClick={() => onDelete(post.id)}>
            Delete Task
          </ListItemButton>
          </>
        ))}
      </List>
      <ListItemDrawer post={currentPost}/>
    </div>
  );
}
