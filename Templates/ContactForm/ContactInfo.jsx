import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { colors, fontFamily, fontSize, fontWeight } from "../../util/theme";
const ContactInfo = () => {
  const styles = {
    wrapperInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    iconsStyle: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.large,
      color: colors.grayColor,
      cursor: "pointer",
    },
    wrapperIcons: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
    },

    textForm: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.normal,
      color: colors.grayColor,
    },
    headerTextMargin: {
      marginBottom: "20px",
      textAlign: "center",
      fontSize: fontSize.medium,
      fontWeight: fontWeight.bold,
      color: colors.accentColor,
    },
    bottomTextMargin: {
      marginBottom: "20px",
      marginTop: "20px",
      textAlign: "center",
      fontSize: fontSize.medium,
      fontWeight: fontWeight.bold,
      color: colors.accentColor,
    },
  };
  return (
    <Grid xs={12} sm={12} md={4} lg={4}>
      <SimplifiedDiv style={styles.wrapperInfo}>
        <SimplifiedDiv>
          <Text style={styles.headerTextMargin}>GET IN TOUCH</Text>
        </SimplifiedDiv>
        <Text style={styles.textForm}>E-Shopper Inc.</Text>
        <Text style={styles.textForm}>
          935 W. Webster Ave New Streets Chicago, IL 60614, NY
        </Text>
        <Text style={styles.textForm}>Newyork USA</Text>
        <Text style={styles.textForm}>Mobile: +2346 17 38 93</Text>
        <Text style={styles.textForm}>Fax: 1-714-252-0026</Text>
        <Text style={styles.textForm}>Email: info@e-shopper.com</Text>
        <SimplifiedDiv>
          <Text style={styles.bottomTextMargin}>SOCIAL NETWORKING</Text>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.wrapperIcons}>
          <FacebookIcon style={styles.iconsStyle} />
          <TwitterIcon style={styles.iconsStyle} />
          <GoogleIcon style={styles.iconsStyle} />
          <YouTubeIcon style={styles.iconsStyle} />
        </SimplifiedDiv>
      </SimplifiedDiv>
    </Grid>
  );
};

export default ContactInfo;
