import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          SetIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          SetIsLoading(false);
        });
    } else {
      SetIsLoading(false);
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {SetIsLoading && <div> Shows are still loading </div>}
      {error && <div> Error occured: {error} </div>}
      {!isLoading && !shows && <div> No shows are added </div>}
      {!isLoading && !error && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
