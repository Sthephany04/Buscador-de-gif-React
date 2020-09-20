import React, { useEffect, useState } from 'react';
import Gif from '../components/Gif';
import getGifs from '../services/getGifs';

const ListOfGifs = ({ keyword }) => {

  const [gifs, setGifts] = useState([])

  useEffect(() => {
    getGifs({ keyword })
      .then(gifs => setGifts(gifs))
  }, [keyword])


  return gifs.map(({ id, title, url }) => 
    <Gif
      key={ id }
      title={ title }
      url={ url }             
      id={ id }
    />
  );
}

export default ListOfGifs