import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="omraade" className="filters omraade">
            <option>Oslo</option>
          </select>
          <select name="hustype" className="filters hustype">
            <option>Leilighet</option>
          </select>
          <select name="soverom" className="filters soverom">
            <option>2 Soverom</option>
          </select>
          <div className="filters price">
            <span className="title">Pris</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
          </div>
          <div className="filters floor-space">
            <span className="title">Stoerrelse</span>
            <input
              type="text"
              name="min-floor-space"
              className="min-floor-space"
            />
            <input
              type="text"
              name="max-floor-space"
              className="max-floor-space"
            />
          </div>
          <div className="filters extras">
            <span className="title">Fasiliteter</span>
            <label htmlFor="extras">
              <span>Balkong</span>
              <input type="checkbox" name="extras" value="balkong" />
            </label>
            <label htmlFor="extras">
              <span>Heis</span>
              <input type="checkbox" name="extras" value="heis" />
            </label>
            <label htmlFor="extras">
              <span>Stroem Inkludert</span>
              <input type="checkbox" name="extras" value="stroem" />
            </label>
            <label htmlFor="extras">
              <span>Garasje</span>
              <input type="checkbox" name="extras" value="garasje" />
            </label>
          </div>
        </div>
      </section>
    );
  }
}
