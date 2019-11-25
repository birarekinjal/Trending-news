import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import * as newsAction from '../../actions/newsAction';

class BBCNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    };
  }

  componentDidMount() {
    const { news } = this.props;
    news.newsAction();
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        newsData: nextProps.newsReducer.newsArticle
      });
    }
  }

  render() {
    const { newsData } = this.state;
    return (
      <>
        <div>
          <Layout>
            <div className="news-main-container">
              {newsData !== []
                ? newsData.map(data => {
                    return (
                      <div className="news-articles" key={data.title}>
                        <div className="title">{data.title} </div>
                        <div className="description"> {data.description} </div>
                        <div className="url">
                          {' '}
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {' '}
                            {data.url}{' '}
                          </a>{' '}
                        </div>
                      </div>
                    );
                  })
                : 'hii'}
            </div>
          </Layout>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  newsAction: () => dispatch(newsAction('bbcNews'))
});

export default connect(mapStateToProps, mapDispatchToProps)(BBCNews);
