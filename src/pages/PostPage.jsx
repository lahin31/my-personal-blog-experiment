import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import axios from 'axios'
import Loader from '../components/Loader'
import Prism from 'prismjs';
import './PostPage.scss'

const PostPage = props => {
  const [post, setPost] = useState({})
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    axios.get(`/wp-json/wp/v2/blogs/${props.match.params.id}`)
        .then(res => {
          setPost(res.data)
          setLoader(false)
        })
        .catch(err => {
          setLoader(true)
        })
  }, []);

  const goBack = () => {
    props.history.goBack()
  }

  useEffect(() => {
    const val = document.querySelectorAll("code")
    for(let i of val) {
      i.classList.add("language-javascript")
    }
    Prism.highlightAll();
  })
  return (
    <Fragment>
      <div className="go-back-btn">
        <button onClick={goBack}>
          Back to Home
        </button>    
      </div>
      <div className="single-post-wrap">
        { loader ? <Loader /> : (
        <Fragment>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className="single-post">
              <h1 style={{ marginBottom: "30px", fontSize: "50px"}} className="single-post-title">{post.title.rendered}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="single-post-content"></div>
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>)}
      </div>
    </Fragment>
  );
}
 
export default withRouter(PostPage);