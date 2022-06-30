import { useState, useEffect } from 'react';
import { getYelp } from './services/FetchUtils';
import YelpList from './YelpList';

export default function YelpSearch() {
  const [yelp, setYelp] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { businesses } = await getYelp(yelpQuery);
    setYelp(businesses);
  }

  async function loadYelpSearch() {
    const money = await getYelp(yelpQuery);
    setYelp(money);
  }

  async function yelpHandleSearch(e) {
    e.preventDefault();
    loadYelpSearch();
  }
  return (
    <div>
      <form className='yelp' onSubmit={yelpHandleSearch}>
        <h2>YELP</h2>
        <input value={yelpQuery}
          onChange={e => setYelpQuery(e.target.value)}/>
        <button>SEARCH</button>

      </form>
      <YelpList yelp={yelp}/>
    </div>
  );
}