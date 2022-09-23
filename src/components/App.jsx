import { Component } from 'react';

export class App extends Component {
  state = {
    price: 0,
    discount: 0,
    quantity: 0,
    prepay: 0,
  };

  calculateTotalPrice = () => {
    const { price, discount, quantity } = this.state;
    const totalPrice = (price - discount) * quantity;
    return totalPrice;
  };

  handleInputChange = event => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState({ [name]: [value] });
    console.log(value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const total = this.calculateTotalPrice();
    const { price, discount, quantity, prepay } = this.state;
    return (
      <>
        <h1
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#010101',
            marginBottom: '32px',
          }}
        >
          Заполни поля ниже:
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 16,
            color: '#010101',
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <label>
              Цена:
              <input
                onChange={this.handleInputChange}
                name="price"
                type="text"
                placeholder="Введи цену за 1 шт."
              />
            </label>
            <label>
              Скидка:
              <input
                onChange={this.handleInputChange}
                name="discount"
                type="text"
                placeholder="Введи скидку на 1 шт."
              />
            </label>
            <label>
              Количество:
              <input
                onChange={this.handleInputChange}
                name="quantity"
                type="text"
                placeholder="Введи количество товара"
              />
            </label>
            <label>
              Предоплата:
              <input
                onChange={this.handleInputChange}
                name="prepay"
                type="text"
                placeholder="Введи сумму предоплаты"
              />
            </label>
          </form>
        </div>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 16,
            color: '#010101',
            marginTop: '32px',
          }}
        >
          Скопируй готовый текст:{' '}
        </h2>
        <div
          style={{
            padding: '8px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 20,
            color: '#010101',
          }}
        >
          <p>
            Добрый день! Стоимость одной единицы товара составляет {price} грн.
            <p>На данный момент у нас действуют следующие скидки: </p>
            <p>
              - при покупке {quantity} единиц товара скидка составляет{' '}
              {discount} грн.
            </p>
            <p>
              Итоговая стоимость за {quantity} единиц товара составит {total}{' '}
              грн.
            </p>
            <p>
              От 50 единиц цена договорная. От 7 единиц товара у нас есть
              предоплата. Предоплата составляет {prepay} грн.
            </p>
            <p>
              Если Вам все подходит, укажите, пожалуйста, данные для отправки
              товара (ФИО, номер телефона, населенный пункт, номер отделения
              "Новой Почты").
            </p>
          </p>
        </div>
      </>
    );
  }
}
