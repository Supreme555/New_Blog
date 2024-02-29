import React, { Component } from 'react';
import { search } from './actionForm';
import { connect } from 'react-redux';
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 1,
      minPrice1: 0,
      maxPrice1: 1,
      title: '',
      publicationDate: '',
      disabled: 'true',
    };
  }
  componentDidMount() {
    this.setState();
    this.reset();
  }
  componentDidUpdate(prevProps) {
    if (this.state.title !== '' && this.state.disabled == 'true') {
      this.setState({ 'disabled': '' });
    }
    else if (this.state.minPrice !== '' && this.state.disabled == 'true') {
      this.setState({ 'disabled': '' });
    }
    else if (this.state.maxPrice !== '' && this.state.disabled == 'true') {
      this.setState({ 'disabled': '' });
    }
    else if (this.state.publicationDate !== '' && this.state.disabled == 'true') {
      this.setState({ 'disabled': '' });
    } else if (this.state.title === '' && this.state.minPrice === '' && this.state.maxPrice === '' && this.state.publicationDate === '' && this.state.disabled == '') {
      this.setState({ 'disabled': 'true' });
    }

  }
  componentWillUnmount() {
    this.reset();
  }
  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state);
  };
  reset = () => {
    this.setState({
      minPrice: 0,
      maxPrice: 1,
      minPrice1: 0,
      maxPrice1: 1,
      title: '',
      publicationDate: '',
      disabled: 'true',
    });
    this.props.search({
      minPrice: 0,
      maxPrice: 1,
      minPrice1: 0,
      maxPrice1: 1,
      title: '',
      publicationDate: ''
    });
    this.setState();
  }
  handlePriceChange = (event) => {
    const value = event.target.value;
    this.setState({ maxPrice1: value });
    this.state.maxPrice = value
  };
  render() {
    const { minPrice1, maxPrice1 } = this.state;
    const priceStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Название:</label>
          <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange} placeholder='Рождественская история' />
        </div>

        <div className="form-group">
          <label>Цена:</label>
          <div className="row">
            <div className="col-6">
              <input type="number" step="0.01" id="minPrice" className="form-control" value={this.state.minPrice} onChange={this.handleChange} placeholder='От' />
            </div>
            <div className="col-6">
              <input type="number" step="0.01" id="maxPrice" className="form-control" value={this.state.maxPrice} onChange={this.handleChange} placeholder='До' />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="publicationDate">День публикации</label>
          <input type="date" id="publicationDate" className="form-control" value={this.state.publicationDate} onChange={this.handleChange} />
        </div>
        <div style={priceStyle}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={maxPrice1}
            style={{ width: '100%' }}
            onChange={this.handlePriceChange}
          />
          <p>Диапазон Цен: ${minPrice1} - ${maxPrice1}</p>
        </div>
        <button className="btn btn-light mr-2 mb-2" onClick={this.reset} disabled={this.state.disabled === 'true'}>Сбросить</button>
        <button type="submit" className="btn btn-danger mb-2">Показать</button>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  search: (filters) => dispatch(search(filters)),
});

export default connect(null, mapDispatchToProps)(MyForm);
