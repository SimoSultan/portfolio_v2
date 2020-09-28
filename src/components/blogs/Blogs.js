import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Footer from '../other/Footer';

function Blogs() {
 

  return (

      <div id='blogs-cont' style={{ height: '100vh', margin: 0, padding: 0, background: '#304153' }}>

        <div style={{ height: '88%'}}>

          <Container>

            <Typography variant="h3" gutterBottom>
              Blogs
            </Typography>

            <Typography variant="body1" gutterBottom>
              This is my first 2 mini react app projects (pokemon and filtering a list) that have been mashed together into my 3rd react project that utilizes (react-router-dom).
              The menu button doesn't work yet. This is just a place where I will add a bunch of small projects into this app to demo them. But really, I made this app so that I 
              don't have multiple node_modules folders sitting in my Google Drive ha. I know all the styling is not perfect, this app hasn't been about that, it's been about learning
              React and the Material UI component library before we cover it in class so that I can understand the fundamental concepts in greater detail when we cover it.
              Thanks for reading if you got this far.
            </Typography>

            
          </Container>

      </div>

      <Footer />

    </div>

  );
}

export default Blogs;


