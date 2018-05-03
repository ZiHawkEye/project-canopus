import React from 'react';

class Search extends React.Component {

    render () {
        return (
            <form>
                <input className='search' type='text' placeholder='Find articles'/>
            </form>
        );
    } 
}

export default Search;