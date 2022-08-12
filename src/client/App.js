/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	Container, Grow, Typography, AppBar, Grid, Toolbar,
} from '@mui/material';

import Form from './components/Form/Form.jsx';
import Posts from './components/Posts/Posts.jsx';

import memories from './images/memories.png';
import { MenuBar, Heading, Image } from './styles.js';

import './styles.css';

const App = () => (
	<Container maxWidth="lg">
		<AppBar position="static" className="menu-bar" color="inherit">
			<Toolbar variant="dense">
				<Typography variant="h3" color="rgba(0,185,225, 1)" component="div">
      		Memories
				</Typography>
				<img src={memories} alt="memories" height={30} className="logo" />
			</Toolbar>
		</AppBar>
		<Grow in>
			<Container>
				<Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
					<Grid item xs={12} sm={7}>
						<Posts />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Form />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	</Container>
);

export default App;
