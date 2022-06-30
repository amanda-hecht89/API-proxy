export function YelpList({ reviews }) {
  return (
    <div className="yelpEdit">
      <h1>Yelp List</h1>
      {
        !reviews.legnth ?
          <div></div> :
          YelpList.map(({}, i) => <div key={reviews + i}>
            <p></p>
          </div>)
      }
    </div>
  );
}