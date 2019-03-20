import React from 'react'
import './IntroSection.scss'


const IntroSection = () => {
  return (
    <div className="intro-section">
      <h1>Muhammad Lahin</h1>
      <div className="my-img">
        <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" />
      </div>
      <div id="widget">
        <div className="btn-o" contextMenu="menu" data-scribe="component:button">
        <a href="https://twitter.com/lahin31?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="true">Follow @lahin31</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
      <p>JavaScript developer @Authlab.</p>
      <p>My Personal Blog</p>
    </div>
  )
}

export default IntroSection;