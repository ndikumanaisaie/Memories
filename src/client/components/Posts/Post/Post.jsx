/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Card, CardHeader, CardMedia, CardActions, CardContent, Button, Typography,
} from '@mui/material';
import { MoreHorizOutlined, DeleteOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import moment from 'moment';

import './style.css';

const Post = ({ post }) => (
	<Card className="card">
		<CardMedia className="media" image={post.selectedFile} title={post.title} />
		<div className="overlay">
			<Typography variant="h6">{post.creator}</Typography>
			<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
		</div>
		<div className="overlay2">
			<Button variant="h6" style={{ color: 'black' }} size="small" onClick={() => {}} >
				<MoreHorizOutlined fontSize="default" />
			</Button>
		</div>
		<div className="details">
			<Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
		</div>
		<CardHeader>
			<Typography className="title" variant="h5" gutterBottom>{post.title}</Typography>
		</CardHeader>
		<CardContent>
			<Typography className="message" variant="body2" >{post.message}</Typography>
		</CardContent>
		<CardActions className="card-actions">
			<Button variant="h6" color="primary" size="small" onClick={() => {}} >
				<ThumbUpAltOutlined fontSize="default" />
			</Button>
			<Button variant="h6" color="primary" size="small" onClick={() => {}} >
				<DeleteOutlined fontSize="default" />
			</Button>
		</CardActions>
	</Card>
);

export default Post;