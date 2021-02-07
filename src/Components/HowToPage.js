import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './Util/axiosWithAuth';
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
export function HowToPage(props){
  //This data should be replaced with a GET request that gets the data of this how-to based on its ID
  const [data, setData] = useState();
  const [editing, setEditing] = useState(false);
  const [newData, setNewData] = useState();
  const params = useParams();
  const history = useHistory(props);
  useEffect(() => {
    axiosWithAuth().get(`/how-to/${params.id}`)
    .then(res => {
      setData(res.data);
      setNewData(res.data);
    })
    .catch(err => console.log(err));
  }, [params.id])
  const deleteHowTo = () => {
    console.log('delet');
    axiosWithAuth().delete(`/how-to/${params.id}`)
    .then(res => {
      console.log(res);
      history.push("/home");
    })
    .catch(err => console.log(err));
  }
  const submitEdit = () => {
    axiosWithAuth().put(`/how-to/${params.id}`, {title: newData.title, problem: newData.problem, solution: newData.solution})
    .then(res => {
      console.log(res);
      setEditing(false);
      history.go(0);
    })
  }
  const onChange = (e) => setNewData({...newData, [e.target.name]:  e.target.value});
  if(!data)
    return <div>LOADING!</div>
  else
    return(
      <div style={{"text-align": "center"}}>
        {!editing &&
          <>
            <h1>{data.title}</h1>
            <p>Author: {data.topic}</p>
            <p>Problem: {data.problem}</p> 
            <p>Solution: {data.solution}</p> 
          </>
        }
        {editing &&
          <form>
            <label for='title'>Title: </label>
            <input 
              type='text'
              name='title'
              placeholder='Title'
              style={{flex: '10', padding: '5px'}}
              value={newData.title}
              onChange={onChange}
            />
            <label for='problem'>Problem: </label>
            <input 
              type='text'
              name='problem'
              placeholder='Problem'
              style={{flex: '10', padding: '5px'}}
              value={newData.problem}
              onChange={onChange}
            />
            <label for='solution'>Solution: </label>
            <input 
              type='text'
              name='solution'
              placeholder='Solution'
              style={{flex: '10', padding: '5px'}}
              value={newData.solution}
              onChange={onChange}
            />
          </form>
        }
        {data.user_id === JSON.parse(localStorage.getItem('user')).id &&
          <>
            <Button onClick={() => { if (window.confirm('Are you sure you wish to delete this How-To?')) deleteHowTo() } } >
              Delete How-To
            </Button>
            {editing &&
              <Button onClick={() => { if (window.confirm('Are you sure you are done editing?')) submitEdit() } } >
                Submit Edit
              </Button>
            }
            {!editing &&
              <Button onClick={() => { if (window.confirm('Are you sure you wish to edit this How-To?')) setEditing(true) } } >
                Edit How-To
              </Button>
            }
            
          </>
        }
      </div>
  )
}

