import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PetList from '../components/PetList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Main = () => {
    const classes = useStyles();
    const [ pets, setPets ] = useState([]);
    const getPets = () => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPets(res.data.sort(function(a, b) {
                    var nameA = a.type.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.type.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                  }))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPets()
    }, [])
    return(
        <Container>
            <h1>Pet Shelter</h1>
            <Link to='/pets/new'>add a pet to the shelter</Link>
            <PetList pets={ pets } />
        </Container>
    )
}
export default Main;