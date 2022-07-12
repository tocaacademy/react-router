import React, {Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getCharacters } from '../../Services/Episodes/actions';

const getIDs = (epis)=>{
    const ids = epis.map(url=>url.split("/")[5])
    
    return ids.join(",")
}

class CharacterModal extends Component {
  constructor(props) {
    super(props);
    const { characters, buttonLabel} = this.props
    this.state = {
      modal: false,
      characters:[],
      buttonLabel
    };
  
    this.toggle = this.toggle.bind(this);

    this.getCharactersByEpisode = this.getCharactersByEpisode.bind(this)
  }

  getCharactersByEpisode = async()=>{
    const ids = getIDs(this.props.characters)
        const chars = await getCharacters(ids);      

        this.setState({
            characters:Array.isArray(chars)? chars:[chars] 
        })

        this.toggle()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { modal, characters, buttonLabel} = this.state
    
    return (
      <>
       <div>
        <Button color="danger" onClick={this.getCharactersByEpisode}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={this.toggle} scrollable={true}>
          <ModalHeader toggle={this.toggle}>Episodios</ModalHeader>
          <ModalBody> 
            <ul>
                {characters.map((char)=>{
                 
                    const {name, species, gender} = char
                    return(
                        <li>
                            <h4>{name}</h4>
                            <h6>{gender}</h6>
                            <div className=''>
                                <small>{species}</small>
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
      </div>
      </>
    );
  }
}
export default CharacterModal;