import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='homepage' >
      
      
        <article className='introduction'>
          <h2>WELCOME TO AYS RONKAI CENTRAL</h2>
          <p>The salvation of youth through Jesus Christ. We understand youth ministry to be that work of the church that is conducted for, with, and by young people..</p>
          <Link to='/resources'><button>Explore Resources</button></Link>
        </article>
        </div>
  )
}

export default Home;