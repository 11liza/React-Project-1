import React from 'react'

const Form = () => {
    const [movie, setMovie] = React.useState({
        title: '',
        year: '',
        imdbid: '',
        type: ''
    })
  return (
    <div>
     <input placeholder='Input title you want to search for' onChange={event => setMovie(event.target.value)}/>
    </div>
  )
}

export default Form
