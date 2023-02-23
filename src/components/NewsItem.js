import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3"  >
        <div className="card"  >
          <div>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1',display:'flex',justifyContent:'flex-fluid',position:'absolute',right:'0'}}>{source}</span>
          </div>
          <img src={!imageUrl ? "https://www.istockphoto.com/photo/panda-bear-face-isolated-on-white-background-gm1154796517-314152139":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title"  >
              {title}
              <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text" >{description}</p>
            <p className="card-text" >
              <small class="text-muted" >
                {date}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary" style={{color: props.mode==='dark'?'white':'black'}}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
