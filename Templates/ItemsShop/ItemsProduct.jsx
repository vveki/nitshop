import React from "react";
import { colors, fontSize, fontWeight } from "../../util/theme";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeToCart } from "../../redux/shopSlice";
const ItemsProduct = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.shop.value);
  console.log(select);
  const styles = {
    div: {
      width: "100%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "40px 0px",
    },
    grid: {
      width: "80%",
      height: "auto",
      padding: "10px",
      color: colors.white,
      display: "flex",
      justifyContent: "center",
      backgroundColor: colors.accentColor,
      margin: "20px",
    },
    gridWhite: {
      width: "80%",
      backgroundColor: colors.white,
      padding: "5px",
    },

    textStyle: {
      color: colors.black,
    },
    buttonStyle: {
      backgroundColor: colors.secondColor,
      border: 0,
      padding: "10px",
      fontWeight: fontWeight.boldPlus,
      cursor: "pointer",
    },
    inputStyle: {
      width: "31px",
      padding: "7px",
    },
  };

  const handleIncrement = (itemId) => {
    dispatch(increment(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement(itemId));
  };
  const handleRemove = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  return (
    <SimplifiedDiv style={styles.div}>
      <Grid container direction="row" style={styles.grid}>
        <Grid lg={6}>Item</Grid>
        <Grid lg={2}>Price</Grid>
        <Grid lg={2}>Quantity</Grid>
        <Grid lg={2}>Total</Grid>
      </Grid>
      {select?.map((item) => (
        <Grid key={item.id} container direction="row" style={styles.gridWhite}>
          <Grid lg={2}>
            <img src={item.image} alt={item.name} style={{ width: "80px" }} />
          </Grid>
          <Grid lg={4}>
            <Text style={styles.textStyle}>
              ColorBlock Scuba <br />
              <span
                style={{
                  fontSize: fontSize.optimal,
                }}
              >
                Web ID: {item.id}
              </span>
            </Text>
          </Grid>
          <Grid lg={2}>
            <Text style={styles.textStyle}>{item.price + "$"}</Text>
          </Grid>
          <Grid ite lg={2}>
            <button
              style={styles.buttonStyle}
              onClick={() => handleDecrement(item.id)}
              disabled={item.qty === 1}
            >
              -
            </button>
            <input
              type="number"
              value={item.qty}
              style={styles.inputStyle}
              onChange={() => {}}
            />
            <button
              style={styles.buttonStyle}
              onClick={() => handleIncrement(item.id)}
              disabled={item.qty === 10}
            >
              +
            </button>
          </Grid>
          <Grid lg={2}>
            <Text style={styles.textStyle}>
              {(item.price * item.qty).toFixed(2) + "$"}
              <button
                style={styles.buttonStyle}
                onClick={() => handleRemove(item.id)}
              >
                X
              </button>
            </Text>
          </Grid>
        </Grid>
      ))}
    </SimplifiedDiv>
  );
};

export default ItemsProduct;
