import React, {Component} from 'react';
import Film from './Film.js';

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
      <h1><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a></h1>
      </>
    );
  }
}

export default FilmList;
