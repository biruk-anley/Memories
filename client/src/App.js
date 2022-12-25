import React,{useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

//create action
import{getPosts} from './actions/posts'
import { useDispatch } from "react-redux";
import Hasab from './images/Yehasabekub.png'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from './styles'
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts);
    },[dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center"  >
                    የ ሃሳብ እቁብ
                </Typography>
                <img className={classes.image} src={ Hasab} alt='books' height={60}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
