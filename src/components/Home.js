import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {

  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.first_name +" " + post.last_name}</span>
              </Link>
              <p>{post.email}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)

//import { connect } from 'react-redux'

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

// export default connect(mapStateToProps)(Home)