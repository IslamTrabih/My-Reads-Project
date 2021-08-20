import React from 'react'
import PropTypes from 'prop-types'

function SearchKeywords(props) {
    const {query, searchBooks} = props
    return (
        <div>
            {(query && searchBooks.length < 1) && (<p>Your <strong>Search Keywords</strong> don't Match with Search Keywords that Allawed</p>)}
            
            {(!query) && (<p><strong>Search Keywords allawed: </strong>Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball, Basketball, Bhagat, Biography, Brief, Business, Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas, Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future, Games, Gandhi, Homer, Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery, Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming, React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development, iOS</p>)}
        </div>
    )
}

SearchKeywords.propTypes = {
    query: PropTypes.string.isRequired,
    searchBooks: PropTypes.array.isRequired,
}

export default SearchKeywords

