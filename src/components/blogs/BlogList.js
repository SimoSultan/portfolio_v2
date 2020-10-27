import React from 'react';
import { blogList } from  './blogList.json';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({

  img: {
    width: '100%',
    maxHeight: '500px',
    margin: '0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  listItem: {
    padding: '6% 0',
    height: '100%',
    marginBottom: '9%',
    "&:last-child": {
      marginBottom: '0',
    }
  },
  blogImgCard: {
    maxHeight: '500px'
  },
  media: {
    height: 140,
  },
}));


function BlogList() {
  const classes = useStyles();


  const listItems = blogList.map(b => (

    <ListItem key={b.name} className={classes.listItem}>

      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={b.img}
            title={b.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {b.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {b.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" target="_blank" href={b.link}>
            Read More
          </Button>
        </CardActions>
      </Card>

    </ListItem>

  ))

  return (
    <Container>
      <List>
        {listItems.reverse()}
      </List>
    </Container>
  )

}

export default BlogList;