import React from 'react';
import { blogList } from  './blogList.json';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { useMediaQuery } from 'react-responsive'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '150px',
    maxHeight: '500px',
    margin: '0'
  },
  listItem: {
    "&:last-child": {
      marginBottom: '5%',
    }
  },
  contentContainer: {
    height: '130px'
  },
  media: {
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '225px',
    }
  },
  cardContainer: {
    margin: '0 auto',
  },
}));


function BlogList() {
  const classes = useStyles();
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })


  const listItems = blogList.map(b => (

    <Grid item justify="center" alignItems="center" spacing={5} xs={ isLandscape ? 9 : 12 } sm={8} md={5} className={classes.listItem}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={b.img}
            title={b.name}
          />
          <CardContent className={classes.contentContainer}>
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
    </Grid>

  ))

  return (
    <Container>
      <Grid container justify="center" alignItems="center" spacing={6}>
        {listItems.reverse()}
      </Grid>
    </Container>
  )

}

export default BlogList;