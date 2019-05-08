import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    


    <div class="row">
    <section className="poke-list" style={{width: '600px' ,height:'122vh'}}>
      {cells}
    </section>
    
    </div>
    
  )
}

export default PokeList;