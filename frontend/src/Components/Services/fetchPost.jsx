import axios from 'axios';

const fetchPost = (setTasks) => {
    axios.get('data.json', {
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json'}
    })
    .then((res) => {
        return(res.data)
    })
    .then((data) => {
        setTasks(data)
    })
};

export default fetchPost;

