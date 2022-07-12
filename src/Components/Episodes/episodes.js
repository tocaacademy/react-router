import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CharacterModal from '../Characters/modal';

const Character = (props) => {
  const {name, air_date, created, episode, characters} = props.episode
  
  return (
    <div style={{width:"350px"}}>
      <Card>
        <CardImg top width="100%" height="300px" src="https://media.cdn.adultswim.com/uploads/20210628/thumbnails/2_21628714375-RickMorty_Inside502.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle 
                tag="h6" 
                className="mb-2 text-muted">
                  Creado en: {created}
                  </CardSubtitle>
          <CardText>
                  Air Date: {air_date} <br/>
                  Episode code: {episode}
                  </CardText>

          <CharacterModal characters={characters} 
                          buttonLabel="Ver Personajes"/>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;