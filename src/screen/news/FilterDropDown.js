import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import * as newsAction from '../../actions/newsAction';

class FilterDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      language: []
    };
  }

  componentDidMount() {
    this.setState({
      categories: ['general', 'health', 'science', 'sports', 'technology'],
      language: ['fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se']
    });
  }

  handleChange = e => {
    const { filterHandleChange } = this.props;
    filterHandleChange(e.target.value);
  };

  languageHandleChange = e => {
    const { languageHandleChange } = this.props;
    languageHandleChange(e.target.value);
  };

  render() {
    const { categories, language } = this.state;
    return (
      <>
        <Row>
          <Col lg="3">
            <div>
              <select onChange={this.handleChange}>
                {categories.map(category => {
                  return (
                    <option key={category.title} value={category}>
                      {' '}
                      {category}{' '}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
          <Col lg="3">
            <div>
              <select onChange={this.languageHandleChange}>
                {language.map(lan => {
                  return (
                    <option
                      className={`${lan}_id`}
                      key={`${lan}_id`}
                      value={lan}
                    >
                      {' '}
                      {lan}{' '}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  newsAction: () => dispatch(newsAction(null))
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterDropDown);
