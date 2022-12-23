import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Hasab from './images/Yehasabekub.png'

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center"  >
                    የ ያሃብ እቁብ
                </Typography>
                <img src={ Hasab} alt='books' height={60}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Forms/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
