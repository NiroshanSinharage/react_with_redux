const initState = {
  posts: [
   {"id":'1',"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
   {"id":'2',"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
   {"id":'3',"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
  ]
}

const rootReducer = (state = initState, action) => {
  
  if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
     return post.id !== action.id
   });
   return {
     ...state,
     posts: newPosts
   }
  }

  return state;
}

export default rootReducer

// console.log(action);
  // if(action.type === 'DELETE_POST'){
  //  let newPosts = state.posts.filter(post => {
  //    return post.id !== action.id
  //  });
  //  return {
  //    ...state,
  //    posts: newPosts
  //  }
  // }

  // {"id":'1',"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
  //   {"id":'2',"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
  //   {"id":'3',"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
