import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './PostCard.css';


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

const PostCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { title, body, id } = props.post;

    return (
        <div className="postCard">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}

                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        {body}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/posts/${id}`}><Button variant="contained" color="primary">More Info {id} </Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostCard;