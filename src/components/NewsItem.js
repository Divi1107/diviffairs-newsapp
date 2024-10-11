import React from 'react';

const NewsItem = (props) => {
  
    let { title, desc, imgurl, newsUrl, author, date, source } =  props;
    
    return (
      <>
      <div className='my-3' style={{ marginBottom: '10px' }}>
        <div className="card" style={{ height: '450px', objectFit: 'cover' }}>

          <img 
            src={!imgurl? "https://dailygalaxy.com/wp-content/uploads/2024/10/Earth-Officially-Has-a-Second-Moon-Asteroid-2024-PT5-Captured-in-Temporary-Orbit.jpg": imgurl} 
            className='card-img-top' 
            alt="news" 
            style={{ height: '180px', objectFit: 'cover' }} 
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 45) : ""}...
              <span 
                className="badge rounded-pill text-bg-danger" 
                style={{ padding: '0.7%', fontSize: '10px', marginLeft: '5px' }}>
                {source}
              </span>
            </h5>
            <p className="card-text">
              {desc ? desc.slice(0, 134) : ""}...
            </p>
            <a 
              rel='noreferrer' 
              href={newsUrl}  
              target='_blank' 
              className="btn btn-sm btn-primary">Read More</a>
          </div>
          <div className="card-footer" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
            <small className="text-body-secondary">
              By {author ? author.slice(0,17) : "Unknown"} on {new Date(date).toLocaleString()}
            </small>
          </div>
        </div>
      </div></>
    );
  
}

export default NewsItem;
