 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import albumData from './../data/albums';
 import '../App.css';

 class Library extends Component { 
   constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }
 
   render() {
    return ( 
      <section className='libraryy'>
        {
          this.state.albums.map( (album, index) => 
                <Link to={`/album/${album.slug}`} key={index}>
                   <img src={album.albumCover} alt={album.title} />
                   <h4>{album.title}</h4>
                   <h4>{album.artist}</h4>
                   <h4>{album.songs.length} songs</h4>
                </Link>
          )
        }
      </section>
     );
   }
 }

export default Library;