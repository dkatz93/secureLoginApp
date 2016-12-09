import React from 'react';
import axios from 'axios';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get('/api/posts')
      .then(res => this.setState({ posts: res.data }))
  }

  render() {
    return <div>
      {this.state.posts.map(post => <div key={post.id}>
        {post.text}
      </div>)}
    </div>
  }

}