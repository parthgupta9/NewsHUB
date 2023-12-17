import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "17rem" }}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
            <img
              src={
                !imageUrl
                  ? "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDkvOTBlZWE2NDktNzI3NC00M2U2LWJlOGUtYmVlYTRjOTVjMzI4LmpwZw==.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="title"
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on {date}
                </small>
              </p>
              <a href={newsUrl} className="btn btm-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
