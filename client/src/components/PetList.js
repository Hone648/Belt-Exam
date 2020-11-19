import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link } from '@reach/router';
const PetList = ({ pets }) => {

    return (
      <Container>
        <h2><u>Pets</u></h2>
        {
          pets.map((pet, i) => {
            return <div key={i}>
              <Paper elevation={4}>
                <h3>{ pet.name }</h3>
                <p>Type: {pet.type}</p>
                <Link to={ '/pets/'+ pet._id }><p>details</p></Link> 
                <Link to={ '/edit/' + pet._id }>edit</Link>
              </Paper>
            </div>
          })}
      </Container>
    )
  }
  export default PetList;