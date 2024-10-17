import React from 'react';
import './NewsItem.css'; // Import your CSS file

const NewsItem = (props,{isDarkMode}) => {
    let { title, desc, imgurl, newsUrl, author, date, source } = props;

    return (
        <>
            <div className="my-3">
                <div className={`card ${!isDarkMode ? 'text-dark bg-light mb-3' : 'text-white bg-dark mb-3'}`}>
                    <img
                        src={
                            !imgurl
                                ? "https://d11k6pweekc5r2.cloudfront.net/4fc335af47b5f95e26a8020ed3401146/common/29377251_m.jpg"
                                : imgurl
                        }
                        className="card-img-top"
                        alt="news"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title ? title.slice(0,60)+"..." : ""}
                            <span className="badge rounded-pill text-bg-dark">{source}</span>
                        </h5>
                        <p className="card-text">
                            {desc ? desc.slice(0, 134)+"..." : ""}
                        </p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                        >
                            Read More
                        </a>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">
                            By {author ? author.slice(0, 17) : "Unknown"} on {new Date(date).toLocaleString()}
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsItem;
