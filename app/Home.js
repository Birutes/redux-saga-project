import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, postItems } from '../actions';
import Loading from './loading';
import "@babel/polyfill";
// import { createPost } from '../api'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  this.setState({[e.target.name]: e.target.value});
}

onSubmit(e) {
  e.preventDefault();

  const post = {
      title: this.state.title,
  }

  this.props.postItems(post)
}

    componentDidMount() {
        this.props.getItems();
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.album) {
            this.props.albums.unshift(nextProps.album)
        }
    }
  
      render() {
        const results = this.props.albums;
        console.log(results)
        return results.length
          ? <div>
              <form onSubmit={this.onSubmit}>
                <div>
                  <label>Title:</label><br />
                  <input type="text" name="title" 
                  value={this.state.title}
                  onChange={this.onChange} />
                </div>
                <button type="submit">Submit</button>
              </form>
              {results.map(result => 
                  <div key={result.id}>
                    <h1>
                      {result.title}
                    </h1>
                  </div>
              )}
            </div>
          : <div><h1>loading...</h1><button onClick={() => this.props.getItems()}>Click</button></div>;
      }
}

const mapStateToProps = state => ({
    albums: state.albums,
    album: state.album
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems, postItems }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)


