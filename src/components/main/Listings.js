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
                <div />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
