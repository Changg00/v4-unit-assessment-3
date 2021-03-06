import React, { Component } from 'react'

const BookList = (props) => {
  

        return(
            <div>
                {props.books.map(mappedbook => (<div>
                    
                <img onClick={() => props.addToShelf[mappedbook.title]} src={mappedbook.img}/>
                <p>Id: {mappedbook.id}</p>
                <p>Title: {mappedbook.title}</p>
                <p>Author: {mappedbook.author}</p>
                </div>))}
                
            </div>
            )

}
 export default BookList