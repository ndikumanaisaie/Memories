/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	Container, Grow, Typography, AppBar, Grid,
} from '@mui/material';

import memories from './images/memories.png';

const App = () => (
	<Container maxWidth="lg">
		<AppBar position="static" color="inherit">
			<Typography variant="h2" align="center">Memories</Typography>
			<img src={memories} alt="memories" height={60} />
		</AppBar>
		<Grow in>
			<Container>
				<Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
					<Grid item xs={12} sm={7}>

					</Grid>
				</Grid>
			</Container>
		</Grow>
	</Container>
);

export default App;
