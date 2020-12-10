import React from 'react';
import {withRouter} from 'react-router-dom';

const GenreList = props => {
    console.log('props :>> ', props);
    return ( 
        <div>
            <h2>Genres Page</h2>
            <ul>
                {props.location.state.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </div>
        
     );
}
 
export default withRouter(GenreList);