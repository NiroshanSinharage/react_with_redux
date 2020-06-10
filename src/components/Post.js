import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
  
   handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    const post = this.props.post ? (
      <div className="post">
        <img src={this.props.post.avatar} alt="A Pokeball" />
        <h5>{this.props.post.first_name}</h5>
        <h5>{this.props.post.last_name}</h5>
        <h5>{this.props.post.email}</h5>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
    //deletePost: (id) => dispatch(type: 'DELETE_POST',id:id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
//export default Post

//import { connect } from 'react-redux'
//import { deletePost } from '../actions/postActions'

 // handleClick = () => {
  //   this.props.deletePost(this.props.post.id);
  //   this.props.history.push('/');
  // }

  {/* <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div> */}

// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.post_id;
//   return {
//     post: state.posts.find(post => post.id === id)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => dispatch(deletePost(id))
//     //deletePost: (id) => dispatch(type: 'DELETE_POST',id:id)
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Post)



 