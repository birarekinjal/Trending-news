import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { newsAction } from '../../actions/newsAction';

class FilterDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      lan: []
    };
  }

  componentDidMount() {
    this.setState({
      countries: ['general', 'health', 'science', 'sports', 'technology'],
      lan: ['fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se']
    });
  }

  handleChange = e => {
    this.props.filterHandleChange(e.target.value);
  };

  languageHandleChange = e => {
    const { props } = this.props;
    props.languageHandleChange(e.target.value);
  };

  render() {
    return (
      <>
        <Row>
          <Col lg="3">
            <div>
              <select onChange={this.handleChange}>
                {this.state.countries.map((category, key) => {
                  return (
                    <option key={key} value={category}>
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
                {this.state.lan.map((lan, key) => {
                  return (
                    <option key={key} value={lan}>
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
