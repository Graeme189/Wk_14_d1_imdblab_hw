import React, {Component} from 'react';
import Film from './Film.js';
import FilmCSS from '../FilmCSS.css';

class FilmList extends Component {
  render() {
    const filmNodes =
    this.props.films.map((film) => {
      return (
        <Film key={film.id}>
        <li><a href={film.url}>
        {film.name}</a>
        </li>
        </Film>
      );
    });
    return (
      <>
      {filmNodes}
      <hr/>
      <div className="box">
      <h1><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a></h1>
      </div>
      </>
    );
  }
}

export default FilmList;
