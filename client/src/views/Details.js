import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Details = props => {
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/pet/' + props.id)
      .then(res => {
        setPet(res.data)
        console.log(res.data)
        setLoaded(true)
      })

  }, [])
  const deletePet = () => {
    axios.delete('http://localhost:8000/api/pet/' + pet._id)
            .then(res=>navigate('/'))
  }


  return (
    <Container>
      <div>
        {loaded &&
          <>
            <h1>Pet Shelter</h1>
            <h2>Details about {pet.name}</h2>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={ deletePet }
              >Adopt {pet.name}</Button>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <div>
              <p>Skills:</p>
                {pet.skills.skill1 && <p>-{pet.skills.skill1}</p>}
                {pet.skills.skill2 && <p>-{pet.skills.skill2}</p>}
                {pet.skills.skill3 && <p>-{pet.skills.skill3}</p>}
            </div>
          </>
        }
      </div>
    </Container>
  )
}
export default Details;