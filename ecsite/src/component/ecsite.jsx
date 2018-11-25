import React from 'react';
import { Form, Input, Label } from 'reactstrap';
const itemsUrl = 'http://localhost:3000/items/';
const cartUrl = 'http://localhost:3000/cart/';
const buyUrl = 'http://localhost:3000/buy/';

export default class EcSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      buy: []
    };
    this.fetchItems = this.fetchItems.bind(this);
    this.checkedList = this.checkedList.bind(this);
    this.priceRange = this.priceRange.bind(this);
    this.fetchCart = this.fetchCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.addCart = this.addCart.bind(this);
    this.buyItems = this.buyItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
    this.fetchCart();
  }

  fetchItems() {
    const targetUrl = new URL(itemsUrl);
    const params = targetUrl.searchParams;

    if (this.state.casual === true) {
      params.append('scene', 'casual')
    }
    if (this.state.business === true) {
      params.append('scene', 'business')
    }
    if (this.state.price_gte) {
      params.append('price_gte', this.state.price_gte)
    }
    if (this.state.price_lte) {
      params.append('price_lte', this.state.price_lte)
    }
    const newUrl = itemsUrl + '?' + params;

    fetch(newUrl).then((res) => {
      return res.json();
    }).then((items) => {
      this.setState({ items: items });
    });
  }

  fetchCart() {
    fetch(cartUrl).then((res) => {
      return res.json();
    }).then((cart) => {
      this.setState({ cart: cart });
    });
  }

  checkedList(event) {
    fetch(itemsUrl).then(this.fetchItems);
    if (event.target.name === 'casual') {
      if (event.target.checked) {
        this.setState({ casual: true });
      } else {
        this.setState({ casual: false });
      }
    }
    if (event.target.name === 'business') {
      if (event.target.checked) {
        this.setState({ business: true });
      } else {
        this.setState({ business: false });
      }
    }
  }

  priceRange(event) {
    fetch(itemsUrl).then(this.fetchItems);
    if (event.target.name === 'price_gte') {
      this.setState({ price_gte: event.target.value })
    }

    if (event.target.name === 'price_lte') {
      this.setState({ price_lte: event.target.value })
    }
  }

  deleteFromCart(id) {
    const targetUrl = cartUrl + id;
    fetch(targetUrl, { method: 'DELETE' }).then(this.fetchCart);
  }

  addCart(itemId, price) {
    const json = { itemId, price };
    fetch(cartUrl, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this.fetchCart);
  }

  buyItems() {
    const date = new Date();
    const array = [];
    for (let i = 0; i < this.state.cart.length; i++) {
      array.push({ 'itemId': this.state.cart[i].itemId, 'price': this.state.cart[i].price });
    };
    const json = { date, 'items': array };
    fetch(buyUrl, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteItems() {
    for (let i = 0; i < this.state.cart.length; i++) {
      const targetUrl = cartUrl + this.state.cart[i].id;
      fetch(targetUrl, { method: 'DELETE' }).then(this.fetchCart);
    };
  }

  render() {
    const sum = () => {
      let num = 0;
      for (let i = 0; i < this.state.cart.length; i++) {
        num += this.state.cart[i].price
      }
      return num;
    };
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <a className='navbar-brand text-white'>Clockworks</a>
          <a className='text-white' data-toggle='modal' href='#cartList'>カート</a>
        </nav>
        <div className='modal fade' id='cartList'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <p className='modal-title h4'>
                  カート
                </p>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
              </div>
              <div className='modal-body'>
                {this.state.cart.length === 0 ? <p className='text-center mt-2'>カートは空です</p> :
                  <div>
                    {this.state.cart.map((row, index) => {
                      const { id, itemId, price } = row;
                      return <ItemsModal key={index} itemId={itemId} price={price} id={id} deleteFromCart={this.deleteFromCart} addCart={this.addCart} />
                    })}
                  </div>
                }
                <div className='text-right'>
                  <p>
                    合計：￥{sum()}
                  </p>
                  <BuyButton buyItems={this.buyItems} deleteItems={this.deleteItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fulid'>
          <div className='row'>
            <div className='col-sm-3'>
              <SearchForm checkedList={this.checkedList} priceRange={this.priceRange} />
            </div>
            <div className='col-sm-9 d-flex flex-wrap mt-5'>
              {this.state.items.map((row, index) => {
                const { id, price, scene } = row;
                return <ItemsList key={index} id={id} price={price} scene={scene} addCart={this.addCart} />;
              })}
            </div>
          </div>
        </div>
      </div >
    )
  }
};

class ItemsList extends React.Component {
  render() {
    return (
      <div>
        <div className='mx-3 my-5' data-toggle='modal' data-target={`#items${this.props.id}`}>
          <img width='200px' src={(`./img/item/${this.props.id}.jpg`)}></img>
          <p className='h5 mt-3'>
            ￥{this.props.price}
            <small>税込</small>
          </p>
        </div>
        <div className='modal fade' id={`items${this.props.id}`}>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
              </div>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <img width='500px' src={(`./img/item/${this.props.id}.jpg`)} className='img-fluid'></img>
                  </div>
                  <div className='col-sm-4 mt-5 text-center'>
                    <p className='h5'>
                      ￥{this.props.price}
                      <small>税込</small>
                    </p>
                    <p>
                      シーン：{this.props.scene === 'business' ? <a>ビジネス</a> : <a>カジュアル</a>}
                    </p>
                    <div className='text-center'>
                      <button onClick={() => { this.props.addCart(this.props.id, this.props.price); }} className='btn btn-secondary' data-dismiss='modal'>
                        カートに入れる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ItemsModal extends React.Component {
  render() {
    return (
      <div>
        <div className='border-bottom'>
          <div className='row my-3 mx-3'>
            <div className='col-3'>
              <img width='300px' src={(`./img/item/${this.props.itemId}.jpg`)} className='img-fluid'></img>
            </div>
            <div className='col-8 text-right my-auto'>
              <p>￥{this.props.price}</p>
            </div>
            <div className='col-1 my-auto'>
              <button className='btn btn-link' onClick={() => { this.props.deleteFromCart(this.props.id); }}>
                <img width='20px' src='./img/trash.svg'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <div className='form-check mt-5'>
          <div className='position-relative'>
            <p className='h5'>シーン</p>
            <input type='checkbox' name='casual' onChange={this.props.checkedList} />
            <label>カジュアル</label>
          </div>
          <div className='position-relative'>
            <input type='checkbox' name='business' onChange={this.props.checkedList} />
            <label>ビジネス</label>
          </div>
        </div>
        <div className='form-check mt-5'>
          <p className='h5'>価格</p>
          <Label>最低</Label>
          <div className='input-group'>
            <Input ref='low' type='number' name='price_gte' className='form-control' onChange={this.props.priceRange} />

            <div className='input-group-append'>
              <span className='input-group-text'>円</span>
            </div>
          </div>
          <Label>最高</Label>
          <div className='input-group'>
            <Input type='number' name='price_lte' className='form-control' onChange={this.props.priceRange} />

            <div className='input-group-append'>
              <span className='input-group-text'>円</span>
            </div>
          </div>
        </div>
      </Form>
    )
  }
}

class BuyButton extends React.Component {
  render() {
    return (
      <button onClick={() => {this.props.buyItems(), this.props.deleteItems(); }} className='btn btn-secondary' data-dismiss='modal'>
        購入
    </button>
    );
  }
}