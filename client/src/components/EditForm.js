import {useState} from 'react';

const EditForm = ({ product, onHandleUpdate, handleShowEdit }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleTitleChange = (e) => {
      setTitle(e.target.value)
  }
    
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const clearFields = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
  }

  const handleUpdate = (e, clearFields) => {
    e.preventDefault()
    onHandleUpdate(product._id, title, price, quantity)
    if (clearFields) {
      clearFields()
    }

    handleShowEdit()
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={(e) => handleUpdate(e, clearFields)}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            onChange={handleTitleChange}
            value={title}
          ></input>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            onChange={handlePriceChange}
            value={price}
          ></input>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            onChange={handleQuantityChange}
            value={quantity}
          ></input>
        </div>

        <div className="actions form-actions">
          <button type="submit" className="button">Update</button>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default EditForm;