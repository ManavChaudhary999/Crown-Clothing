const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    // Then increase quanitity
    if(existingCartItem)
    {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ?
            {...item, quanitity: item.quanitity + 1}
            :
            item
        )
    }
    return [...cartItems, {...cartItemToAdd, quanitity: 1}] // else set quanitity 1 for first time
};

export default addItemToCart;