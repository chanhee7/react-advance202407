import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // 장바구니에 담긴 상품 객체들
  totalQuantity: 0, // 장바구니 총 수량
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      // 추가될 상품 객체
      const newCartItem = action.payload;
      // 이 상품이 기존 장바구니 배열에 있는 상품인지 탐색
      const existingItem = state.cartItems.find(item => item.id === newCartItem.id);
      console.log('existingItem: ', existingItem);
      
      if (!existingItem) { // 처음 장바구니에 추가된 상품인 경우
      state.cartItems.push(newCartItem);
      } else {
        existingItem.quantity++;
        existingItem.total += newCartItem.price;
      }
      // 복사 후 상태관리를 해주는것이 좋음
      // const copy = state.totalQuantity + 1;
      // state.totalQuantity = copy;
      state.totalQuantity++;
    },

    minusCartItem(state, action) {
      const minusCartItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === minusCartItem.id);

      if (existingItem.quantity === 1) { // 수량이 1인 경우 배열에서 삭제
        // const index = state.cartItems.findIndex(item => item.id === id);
        // state.cartItems.splice(index, 1);

        state.cartItems = state.cartItems.filter(item => item.id !== minusCartItem.id);
      } else { // 수량, 총액 갱신
        existingItem.quantity--;
        existingItem.total -= minusCartItem.price;
      }
      state.totalQuantity--;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;