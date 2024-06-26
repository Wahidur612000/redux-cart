import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch("https://redux-b1818-default-rtdb.europe-west1.firebasedatabase.app/cart.json");
            if(!response.ok){
                throw new Error('Could not fetch cart data');
            }

            const data=await response.json();

            return data;
        }
            try{
                const cartData= await fetchData();
                dispatch(cartActions.replaceCart({
                    items:cartData.items || [],
                    totalQuantity:cartData.totalQuantity,
                }))
            } catch (error){
                dispatch(
                    uiActions.showNotification({
                      status: "error",
                      title: "Error!",
                      message: "Sending cart data failed",
                    })
                  );
            }
        
    }
}

export const sendCardData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending....",
          message: "Sending cart data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://redux-b1818-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart data Failed.");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Succes!",
            message: "Sending cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed",
          })
        );
      }
    };
  };
  