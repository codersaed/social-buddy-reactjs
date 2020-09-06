import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './PostDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostDetail = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { postsId } = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    return (
        <>
            <div className="postDetail">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="5" component="h1">
                            {post.title}

                        </Typography>
                        <Typography variant="body2" component="p">
                            <br />
                            {post.body}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="postComment">
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>
        </>
    );
};

export default PostDetail;