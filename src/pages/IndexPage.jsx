import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import IntroSection from '../components/IntroSection'
import Loader from '../components/Loader'
import './IndexPage.scss'

function IndexPage(props) {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get('/wp-json/wp/v2/blogs')
        .then(res => {
          setPosts(res.data)
          setIsLoaded(true)
          console.log(res)
        })
        .catch(err => {
          console.error(err)
          setIsLoaded(false)
        })
  }, [])

  const goToPost = id => {
    props.history.push(`/post/${id}`)
  }
  return (
    <div className="container">
      <IntroSection />
      <div className="posts">
        { !isLoaded ? <Loader /> : 
          posts.map(post => {
            return (
              <div className="post" key={post.id} onClick={() => goToPost(post.id)}>
                <h1>{post.title.rendered}</h1>
                <small>{post.date.substring(0, 10)}</small>
                <hr />
                <h3>
                  <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 200) + "..." }}></span>
                </h3>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
 
export default withRouter(IndexPage);