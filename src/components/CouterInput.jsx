export function CounterInput() {
  const calculatePrice = event => {
    event.preventDefault();

    const inputPrice = event.target.elements.price.value;
    const inputDiscount = event.target.elements.discount.value;
    const inputQuantity = event.target.elements.quantity.value;

    const totalPrice = (inputPrice - inputDiscount) * inputQuantity;

    return totalPrice;
  };

  return (
    <div>
      <form>
        <input
          name="price"
          type="text"
          placeholder="Введите цену товара"
          autoComplete="off"
        />
        <input
          name="discount"
          type="text"
          placeholder="Введите размер скидки"
          autoComplete="off"
        />
        <input
          name="quantity"
          type="text"
          placeholder="Введите количество"
          autoComplete="off"
        />
        <button type="submit" onSubmit={calculatePrice()}>
          Рассчитать цену
        </button>
      </form>
    </div>
  );
}
