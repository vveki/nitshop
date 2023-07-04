import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
import { colors, fontSize } from "../../util/theme";

const Checkout = () => {
  const styles = {
    mainDiv: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 10%",
    },
    containerCheck: {
      display: "flex",
      padding: "50px 50px",
      flexDirection: "column",
      border: "1px solid silver",
      marginRight: "20px",
      borderRadius: "5px",
    },
    infoContainer: {
      display: "flex",
      gap: "30px",
      margin: "30px 0px",
    },
    infoWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    inputP: {
      marginTop: "7px",
      padding: "5px",
    },
    buttonWrapper: {
      display: "flex",
      gap: "30px",
    },
    buttonMargin: {
      marginBottom: "25px",
    },
    button: {
      padding: "12px 35px",
      backgroundColor: colors.accentColor,
      color: colors.white,
      fontSize: fontSize.optimal,
    },
    wrapperTax: {
      padding: "2px 20px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: colors.lightGrayColor,
      color: colors.white,
      margin: "5px 0px",
      fontSize: fontSize.optimal,
    },
    containerInfo: {
      display: "flex",
      padding: "30px 20px",
      flexDirection: "column",
      border: "1px solid silver",
      borderRadius: "5px",
    },
    inputCheckbox: {
      marginRight: "10px",
    },
    wrapperCheckBox: {
      marginBottom: "7px",
    },
  };
  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <Grid container item>
        <Grid xs={12} sm={12} md={12} lg={6}>
          <SimplifiedDiv style={styles.containerCheck}>
            <SimplifiedDiv style={styles.wrapperCheckBox}>
              <input style={styles.inputCheckbox} type="checkbox" id="scales" />
              <label for="scales">Use Coupon Code</label>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.wrapperCheckBox}>
              <input style={styles.inputCheckbox} type="checkbox" id="scales" />
              <label for="scales">Use Gift Vaucher</label>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.wrapperCheckBox}>
              <input style={styles.inputCheckbox} type="checkbox" id="scales" />
              <label for="scales">Estimate Shipping & Taxes</label>
            </SimplifiedDiv>

            <SimplifiedDiv style={styles.infoContainer}>
              <SimplifiedDiv style={styles.infoWrapper}>
                <label for="country">Country</label>
                <select style={styles.inputP}>
                  <option>United States</option>
                  <option>Serbia</option>
                </select>
              </SimplifiedDiv>
              <SimplifiedDiv style={styles.infoWrapper}>
                <label for="region">Region / State</label>
                <select style={styles.inputP}>
                  <option>Select</option>
                </select>
              </SimplifiedDiv>
              <SimplifiedDiv style={styles.infoWrapper}>
                <label for="zipcode">Zip Code:</label>
                <input type="number" style={styles.inputP} />
              </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.buttonWrapper}>
              <PrimaryButton style={styles.button}>Get Qoutes</PrimaryButton>
              <PrimaryButton style={styles.button}>Continue</PrimaryButton>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6}>
          <SimplifiedDiv style={styles.containerInfo}>
            <SimplifiedDiv style={styles.buttonMargin}>
              <SimplifiedDiv style={styles.wrapperTax}>
                <p>Cart Sub Total</p>
                <p>$59</p>
              </SimplifiedDiv>
              <SimplifiedDiv style={styles.wrapperTax}>
                <p>Eco Tax</p>
                <p>$2</p>
              </SimplifiedDiv>
              <SimplifiedDiv style={styles.wrapperTax}>
                <p>Shopping Cart</p>
                <p>Free</p>
              </SimplifiedDiv>
              <SimplifiedDiv style={styles.wrapperTax}>
                <p>Total $61</p>
                <p>$59</p>
              </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.buttonWrapper}>
              <PrimaryButton style={styles.button}>Update </PrimaryButton>
              <PrimaryButton style={styles.button}>Check Out</PrimaryButton>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default Checkout;
