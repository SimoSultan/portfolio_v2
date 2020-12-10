import React from 'react';
import { projectList } from  './projectList.json';
import ProjectItem from './ProjectItem';

// Material UI components 
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

// import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    list:{
        marginTop: '19%',
    },

}));



function ProjectList() {
    const classes = useStyles();

    const listItems = projectList.map((p, index) => ( <ProjectItem project={p} index={index} key={`index-${index}`}/> ))

    return (

        <Container>

            <List className={classes.list}>

                {listItems.reverse()}

            </List>

        </Container>
        
    ) 

}

export default ProjectList;