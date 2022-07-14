export default function YelpList({ reviews }) {
  return (
    <div className="yelpEdit">
      <h1>Yelp List</h1>
      {
        !reviews.legnth ?
          <div>{reviews.id}</div> :
          YelpList.map(({ name, image_url, url, categories }, i) => <div key={reviews + i}>
            <h1>{name}</h1>
            <image src={image_url}/>
            <p>{categories}</p>
            <a href={url}/>
          </div>)
      }
    </div>
  );
}