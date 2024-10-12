const initialState = {
  items: [],
  totalAmount: 0, // Initialize totalAmount
};

const handleCart = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
      case 'ADDITEM':
          const exist = state.items.find((x) => x.id === product.id);
          if (exist) {
              const updatedItems = state.items.map((x) =>
                  x.id === product.id ? { ...x, qty: x.qty + 1 } : x
              );

              // Calculate new totalAmount
              const newTotalAmount = updatedItems.reduce((acc, item) => acc + item.price * item.qty, 0);
              
              return {
                  ...state,
                  items: updatedItems,
                  totalAmount: newTotalAmount,
              };
          } else {
              const newItem = { ...product, qty: 1 };
              const newItems = [...state.items, newItem];

              // Calculate new totalAmount
              const newTotalAmount = newItems.reduce((acc, item) => acc + item.price * item.qty, 0);

              return {
                  ...state,
                  items: newItems,
                  totalAmount: newTotalAmount,
              };
          }

      case 'DELITEM':
          const exist1 = state.items.find((x) => x.id === product.id);
          let updatedItems;

          if (exist1.qty === 1) {
              updatedItems = state.items.filter((x) => x.id !== exist1.id);
          } else {
              updatedItems = state.items.map((x) =>
                  x.id === product.id ? { ...x, qty: x.qty - 1 } : x
              );
          }

          // Calculate new totalAmount
          const updatedTotalAmount = updatedItems.reduce((acc, item) => acc + item.price * item.qty, 0);

          return {
              ...state,
              items: updatedItems,
              totalAmount: updatedTotalAmount,
          };

      case 'SETTOTAL':
          return {
              ...state,
              totalAmount: action.payload,
          };

      default:
          return state;
  }
};

export default handleCart;
