import React from 'react';
import Card from 'react-bootstrap/Card';
import CardPost from '../components/CardPost.jsx';

   const NewPost = () => {
    return(
        <Card>
          <Card.Body>
            <CardPost/>
          </Card.Body>
        </Card>
    )
    };

 export default NewPost;