import React, {Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getEpisodes } from '../../Services/Characters/actions';
import { Link,Outlet  } from 'react-router-dom'

const getIDs = (epis)=>{
    const ids = epis.map(url=>url.split("/")[5])
    
    return ids.join(",")
}

class EpisodesModal extends Component {
  constructor(props) {
    super(props);
    const {  episodes, buttonLabel} = this.props
    this.state = {
      modal: false,
      episodes:[],
      buttonLabel
    };  
    
    this.toggle = this.toggle.bind(this);

    this.getEpisodesByCharacter = this.getEpisodesByCharacter.bind(this)
  }

  getEpisodesByCharacter = async()=>{
    const ids = getIDs(this.props.episodes)
        let finalEpis = []
        const epis = await getEpisodes(ids);
        
        if(Array.isArray(epis)){
            finalEpis=epis
        }else{
            finalEpis.push(epis)
        }

        this.setState({
            episodes:finalEpis 
        })

        this.toggle()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { modal, episodes, buttonLabel} = this.state
    return (
      <>
       <div>
        <Button color="danger" onClick={this.getEpisodesByCharacter}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={this.toggle} scrollable={true}>
          <ModalHeader toggle={this.toggle}>Episodios</ModalHeader>
          <ModalBody> 
            <ul>
                {episodes.map((epi)=>{
                    console.log("epi",epi)
                    const {name, air_date, episode} = epi
                    return(
                        <li>
                            <h4>{name}</h4>
                            <h6>{episode}</h6>
                            <div className=''>
                                <small>{air_date}</small>
                            </div>
                        </li>
                    )
                })}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cerrar modal </Button>
          </ModalFooter>
        </Modal>

        <Link
          to={`${this.props.characterID}`}
          key={this.props.characterID}
        >
          Ver perfil
        </Link>

        <Outlet />
      </div>
      </>
    );
  }
}
export default EpisodesModal;