import React, { Component } from 'react';

export default class Listings extends Component {
  render() {
    return (
      <section className="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>
        <section className="sort-by-area">
          <div>395 treff funnet</div>
          <div className="sort-options">
            <select name="sort-by" className="sort-by">
              <option value="synkende">Synkende pris</option>
              <option value="stigende">Stigende pris</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list" />
              <i className="fas fa-th" />
            </div>
          </div>
        </section>
        <section className="listing-result">
          <div className="listing">
            <div className="listing-img">
              <span className="addresse">Addresse</span>
              <div className="details">
                <div className="user-img" />
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">05/05/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i class="far fa-square" />
                    <span>100 m&sup2;</span>
                    <div className="bedrooms">
                      <i class="fas fa-bed" />
                      <span>3 Soverom</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-info">
                  <span>6000 Kr / mnd</span>
                  <span>
                    <i class="fas fa-map-marker" />Bislet, Oslo
                  </span>
                </div>
              </div>
              <div className="details" />
            </div>
          </div>
        </section>
        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
