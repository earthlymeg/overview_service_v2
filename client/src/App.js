
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Overview from './components/Overview.jsx';
import logo from './images/acme_logo.png';
import background from './images/clothes_rack.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSession: 83
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleStyleClick = this.handleStyleClick.bind(this);
    this.handleAddToBag = this.handleAddToBag.bind(this);
  }

  componentDidMount() {
    axios.get('http://52.26.193.201:3000/products/list/?count=10')
      .then(res => this.setState({ inventory: res.data, currentItem: res.data[4] }))
      .then(res => {
        return axios.get(`http://52.26.193.201:3000/products/${this.state.currentItem.id}/styles`)
      })
      .then(res => this.setState({ styles: res.data, currentStyle: res.data.results[0], galleryImgs: res.data.results[0].photos }))
      .then(res => {
        return axios.get(`http://52.26.193.201:3000/reviews/${this.state.currentItem.id}/meta`)
      })
      .then(res => this.setState({ ratings: res.data.ratings }))
      .then(res => {
        return axios.get('http://52.26.193.201:3000/cart/83')
      })
      .then(res => this.setState({ cart: res.data }, () => {console.log('cart:', this.state.cart)}))
  }

  handleChange(e) {
    this.setState({ search: e.target.value}, function() {console.log(this.state.search)})
  }

  handleSearchSubmit() {
    let query = this.state.search.toLowerCase();

    this.state.inventory.forEach( item => {
      let itemName = item.name.toLowerCase();

      if (itemName.includes(query)) {
        this.setState({ currentItem: item })
        axios.get(`http://52.26.193.201:3000/products/${item.id}/styles`)
          .then(res => this.setState({ styles: res.data, currentStyle: res.data.results[0], galleryImgs: res.data.results[0].photos }))
          .then(res => {
            return axios.get(`http://52.26.193.201:3000/reviews/${item.id}/meta`)
          })
          .then(res => this.setState({ ratings: res.data.ratings })
          )
      }
    })
  }

  handleStyleClick(e) {
    console.log('old:', this.state.currentStyle)
    this.setState({ currentStyle: e, galleryImgs: e.photos }, () => {console.log('new:', this.state.currentStyle)})
  }

  handleAddToBag() {
    console.log(this.state.userSession, this.state.currentStyle.style_id)
    axios.post('http://52.26.193.201:3000/cart/', {
      user_session: this.state.userSession,
      product_id: this.state.currentStyle.style_id
    })
    .then(res => console.log(res))

  }

  render() {

    const inventory = this.state.inventory;
    const currentItem = this.state.currentItem;
    const styles = this.state.styles;
    const currentStyle = this.state.currentStyle;
    const galleryImgs = this.state.galleryImgs;
    const ratings = this.state.ratings;

    return (

      <>

        {/* NAVBAR */}
        <Navbar bg={background} logo={logo} handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmit} />

        {/* BANNER */}
        <Banner />

        {/* OVERVIEW MODULE */}
        <Overview inventory={inventory}
                  currentItem={currentItem}
                  styles={styles}
                  currentStyle={currentStyle}
                  images={galleryImgs}
                  ratings={ratings}
                  addToBag={this.handleAddToBag}
                  handleStyleClick={this.handleStyleClick}
        />

      </>
    );
  }
}

export default App;