import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsAction from '../actions/newsAction';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    const { news } = this.props;
    this.setState({
      value: e.target.value
    });
    news.searchNews(e.target.value);
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="search.."
            value={value}
            className="search-input"
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  news: bindActionCreators(newsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
