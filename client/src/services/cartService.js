import axios from 'axios'

const getCartItems = async () => {
  try {
    const { data } = await axios.get("/api/cart");
    return data
  } catch (e) {
    console.error(e)
  }
}

const addCartItem = async (productId) => {
  try {
    const { data } = await axios.post("/api/add-to-cart", {productId});
    console.log(data)
    return data
  } catch (e) {
    console.error(e)
  }
}

export default {
  getCartItems,
  addCartItem,
}