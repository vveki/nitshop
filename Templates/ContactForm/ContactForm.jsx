import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";

import ContactInfo from "./ContactInfo";
const ContactForm = () => {
  const styles = {
    container: {
      padding: "2% 10%",
    },
    headerText: {
      textAlign: "center",
      fontSize: fontSize.large,
      fontWeight: fontWeight.bold,
      color: colors.accentColor,
      marginBottom: "40px",
    },
    headerFormText: {
      textAlign: "center",
      fontSize: fontSize.medium,
      fontWeight: fontWeight.bold,
      color: colors.accentColor,
    },
    wrapperForm: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    wrapperInputs: {
      display: "flex",
      justifyContent: "space-between",
      gap: "50px",
    },
    inputStyle: {
      width: "100%",
      padding: "10px",
    },
    inputSubject: {
      padding: "10px",
    },
    button: {
      padding: "7px 25px",
      backgroundColor: colors.accentColor,
      color: colors.white,
      fontSize: fontSize.optimal,
      borderRadius: "2px",
      cursor: "pointer",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "end",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      <Text style={styles.headerText}>CONTACT US</Text>
      <Grid lg={12} gap="100px" container>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <SimplifiedDiv style={styles.wrapperForm}>
            <Text style={styles.headerFormText}>GET IN TOUCH</Text>
            <SimplifiedDiv style={styles.wrapperInputs}>
              <input style={styles.inputStyle} type="text" placeholder="Name" />
              <input
                style={styles.inputStyle}
                type="email"
                placeholder="Email"
              />
            </SimplifiedDiv>
            <input
              style={styles.inputSubject}
              type="text"
              placeholder="Subject"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message Here"
            />
            <SimplifiedDiv style={styles.buttonWrapper}>
              <PrimaryButton style={styles.button}>Submit</PrimaryButton>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
        <ContactInfo />
      </Grid>
    </SimplifiedDiv>
  );
};

export default ContactForm;
