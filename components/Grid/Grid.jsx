import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../CustomDiv/CustomDiv";
const GridCmp = () => {
  return (
    <Grid container marginTop={5} spacing={3} >
      <Grid
        container
        justifyContent="space-evenly"
        spacing={2}
        textAlign='center'
      >
        <CustomDiv width="30%">xs =8</CustomDiv>
        <CustomDiv width="30%">xs =8</CustomDiv>
        <CustomDiv width="30%">xs =8</CustomDiv>
      </Grid>
      <Grid item textAlign='center' xs={8} sm={10} md={8} lg={6}>
        <CustomDiv width="100%">xs =8</CustomDiv>
      </Grid>
      <Grid item textAlign='center' xs={4} sm={2} md={4} lg={6}>
        <CustomDiv width="100%">xs = 4</CustomDiv>
      </Grid>
      <Grid item textAlign='center' xs={4}>
        <CustomDiv width="100%">xs = 4</CustomDiv>
      </Grid>
      <Grid item textAlign='center' xs={8}>
        <CustomDiv width="100%">xs = 8</CustomDiv>
      </Grid>
    </Grid>

  );
};

export default GridCmp;
