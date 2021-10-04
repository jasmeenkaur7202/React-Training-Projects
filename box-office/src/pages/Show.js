import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { showId } = useParams();

  const [show, setShow] = useState(null);
  // console.log('params', params);

  useEffect(() => {
    apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(results => {
        setShow(results);
    });
  }, [showId]); // whenever we will i/p a value into input field, use effect run will be consoled....


  console.log('show',show);
  return <div>This is just show page</div>;
};

export default Show;
