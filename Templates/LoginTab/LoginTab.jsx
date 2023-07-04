import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
import { colors, fontSize } from "../../util/theme";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";
import { fetchAllUsers } from "../../api/userApi";

const LoginTab = () => {
  const styles = {
    mainDiv: {
      padding: "5% 10%",
    },
    textStyle: {
      fontSize: fontSize.large,
      marginBottom: "20px",
    },
    inputStyle: {
      padding: "10px 5px",
      marginBottom: "15px",
    },
    checkboxWrapper: {
      display: "flex",
      marginBottom: "20px",
      alignItems: "center",
      gap: "5px",
    },
    buttonStyle: {
      width: "120px",
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      fontSize: fontSize.medium,
      borderRadius: "5px",
      border: "none",
      color: colors.white,
      backgroundColor: colors.accentColor,
    },
    roundDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.accentColor,
      borderRadius: "50%",
      color: colors.white,
      width: "70px",
      height: "70px",
      margin: "auto",
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const [users, setUsers] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchAllUsers().then((allUsers) => setUsers(allUsers));
  }, []);
  console.log(users);
  console.log(user);
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    users.filter((user) => {
      if (user.email !== e.target[0].value) return;
      if (user.name !== e.target[1].value) return;
      console.log(user.name, user.email);

      setUser(user);
    });
  };

  return (
    <Grid lg={12} md={12} style={styles.mainDiv} container item>
      <Grid lg={5} md={5} sm={12} display="flex" flexDirection="column">
        <Text style={styles.textStyle}>Login to your acoount</Text>
        <form style={styles.formStyle} onSubmit={loginHandler}>
          <input
            style={styles.inputStyle}
            type="email"
            placeholder="Email"
            required
          />
          <input
            style={styles.inputStyle}
            type="name"
            placeholder="Name"
            required
          />
          <SimplifiedDiv style={styles.checkboxWrapper}>
            <input type="checkbox" />
            <Text>Keep me signed in</Text>
          </SimplifiedDiv>
          <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
        </form>
      </Grid>
      <Grid md={2} lg={2} sm={12} display="flex">
        <div style={styles.roundDiv}>OR</div>
      </Grid>
      <Grid md={5} lg={5} sm={12} display="flex" flexDirection="column">
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Name"
            required
          />
          <input
            style={styles.inputStyle}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            style={styles.inputStyle}
            type="password"
            placeholder="Password"
            required
          />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginTab;
