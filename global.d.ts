type Item = {
    id: number;
    quantity: number;
    imageUrl: string;
    name: string;
    price: string;
  };
  
  interface Cart<TValue> {
    [id: number]: TValue;
  }
  
  type ItemProps = {
    item: Item;
    cart: Cart<Item>;
    setCart: ({}) => void;
  };
  
  type CartItemsProps = {
    cart: Cart<Item>;
    setCart: ({}) => void;
  };
  