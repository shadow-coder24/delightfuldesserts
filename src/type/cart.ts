export type CartItem = {
  productid: number;
  productname: string;
  productdescription: string;
  productprice: number;
  productimage: string;
  quantity: number;
};

export type Cart = {
  [productId: string]: CartItem;
};