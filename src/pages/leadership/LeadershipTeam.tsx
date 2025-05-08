import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './LeadershipTeam.css';

const LEADERSHIP_TEAM = [
  {
    name: 'Dr. Getahun Mekuria',
    title: 'Minister of Innovation and Technology',
    image: '/assets/images/team/minister.jpg',
  },
  {
    name: 'Dr. Solomon Abdi',
    title: 'State Minister of Innovation and Technology',
    image: '/assets/images/team/state-minister.jpg',
  },
  {
    name: 'Muluken Assefa',
    title: 'Director General of the Ethiopian Investment Commission',
    image: '/assets/images/team/director-general.jpg',
  },
];

const LeadershipTeam = () => {
  return (
    <Container className="leadership-team">
      <Row>
        {LEADERSHIP_TEAM.map(({ name, title, image }, index) => (
          <Col key={index} md={4}>
            <Image src={image} alt={name} className="team-image" />
            <h4>{name}</h4>
            <p>{title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LeadershipTeam;