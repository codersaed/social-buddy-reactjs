import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './comments.css'

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


const Comments = (props) => {
    const classes = useStyles();
    const { id, name, email, body } = props.comment;

    return (
        <div className="comment">
            <div>
                <h2 className="text">COMMENT {id}</h2>
            </div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="5" component="h3">
                        Name: {name}
                    </Typography>
                    <Typography variant="5" component="h4">
                        <br />
                        Email: {email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        {body}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Comments;