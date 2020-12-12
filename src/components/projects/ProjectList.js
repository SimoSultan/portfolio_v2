import React from 'react';
import { projectList } from  './projectList.json';
import ProjectItem from './ProjectItem';

// Material UI components 
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import { useMediaQuery } from 'react-responsive'


const listItems = projectList.map((p, index) => ( <ProjectItem project={p} index={index} key={`index-${index}`}/> ))


function ProjectList() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' })
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

    return (

        <Container 
            style={{
                paddingLeft: !isLandscape 
                    ? '' 
                    : isBigScreen && isLandscape 
                        ? ''
                        : '15%'
            }}
        >
        
            <List>

                {listItems.reverse()}

            </List>

        </Container>
        
    ) 

}

export default ProjectList;