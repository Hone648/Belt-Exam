import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link, navigate } from '@reach/router';
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

const PetForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState([]);
  const [ nameTaken, setNameTaken ] = useState(false);
  const onSubmitHandler = e => {
    e.preventDefault();
    axios.get('http://localhost:8000/api/pet/' + name)
      .then(res => {
        console.log(res.data.value);
        if (res.data.value !== name) {
          let tempObj = {
            name: name,
            type: type,
            description: description,
            skills: {
              skill1: skill1,
              skill2: skill2,
              skill3: skill3
            }
          }
          axios.post('http://localhost:8000/api/pet/new', tempObj)
            .then(res => {
              navigate('/')
            })
            .catch(err => {
              const errorResponse = err.response.data.errors;
              const errorArr = [];
              for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
            })
        }else {
          setNameTaken(true);
        }
      })
  }

return (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Add New Pet
    </Typography>
      <div>
        {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
      </div>
      <form onSubmit={onSubmitHandler} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Pet Name"
          name="name"
          autoComplete="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        {nameTaken && <p style={{color: "red"}}>Name is already in database</p>}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="type"
          label="Type *Required"
          name="type"
          autoComplete="type"
          onChange={(e) => {
            setType(e.target.value)
          }}
          value={type}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description *Required"
          name="description"
          autoComplete="description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          value={description}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="skill1"
          label="skill1"
          name="skill1"
          autoComplete="skill1"
          onChange={(e) => {
            setSkill1(e.target.value)
          }}
          value={skill1}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="skill2"
          label="skill2"
          name="skill2"
          autoComplete="skill2"
          onChange={(e) => {
            setSkill2(e.target.value)
          }}
          value={skill2}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="skill3"
          label="skill3"
          name="skill3"
          autoComplete="skill3"
          onChange={(e) => {
            setSkill3(e.target.value)
          }}
          value={skill3}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add
          </Button>
      </form>
      <Link to="/"><Button variant="contained">Home</Button></Link>
    </div>
  </Container>
)
}
export default PetForm;