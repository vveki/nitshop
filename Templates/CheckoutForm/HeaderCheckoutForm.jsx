import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import CancelIcon from "@mui/icons-material/Cancel";
const HeaderCheckoutForm = () => {
  const styles = {
    container: {
      display: "flex",
      gap: "30px",
      padding: "20px 0px 20px 20px",
    },
    wrapperCheckBox: {
      display: "flex",
      alignItems: "center",
    },
    containerText: {
      backgroundColor: colors.dirtyGray,
      padding: "15px",
    },
    textHeader: {
      fontSize: fontSize.large,
    },
    textBootom: {
      fontSize: fontSize.optimal,
    },
    textMiddle: {
      fontSize: fontSize.normal,
    },
    textWrapper: {
      padding: "20px 0px 20px 20px",
    },
    iconStyle: {
      color: colors.accentColor,
      cursor: "pointer",
    },
  };
  return (
    <Grid md={12} lg={12}>
      <SimplifiedDiv style={styles.containerText}>
        <Text style={styles.textHeader}>Step 1</Text>
      </SimplifiedDiv>
      <SimplifiedDiv>
        <SimplifiedDiv style={styles.textWrapper}>
          <Text style={styles.textHeader}>New User</Text>
          <Text style={styles.textMiddle}>Checkout options</Text>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.container}>
          <SimplifiedDiv style={styles.wrapperCheckBox}>
            <input type="checkbox" />
            <Text>Register Account</Text>
          </SimplifiedDiv>
          <SimplifiedDiv style={styles.wrapperCheckBox}>
            <input type="checkbox" />
            <Text>Guest Checkout</Text>
          </SimplifiedDiv>
          <SimplifiedDiv style={styles.wrapperCheckBox}>
            <CancelIcon style={styles.iconStyle} />
            <Text style={styles.iconStyle}>Cancel</Text>
          </SimplifiedDiv>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.containerText}>
          <Text style={styles.textBootom}>
            Please use Register And Checkout to easily get access to your order
            history, or use Checkout as Guest
          </Text>
        </SimplifiedDiv>
      </SimplifiedDiv>
    </Grid>
  );
};

export default HeaderCheckoutForm;
