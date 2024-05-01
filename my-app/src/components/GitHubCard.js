import React from 'react';
import Card from 'react-bootstrap/Card';

const GitHubCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="../assets/natalie.jpg" />
    <Card.Body>
      <Card.Title>Natalie Ojeda</Card.Title>
      <Card.Text>
        I live in California.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default GitHubCard;
