import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import CategoryTab from "../CategoryTab/CategoryTab";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";
import ArticlesHomePage from "../ArticlesHomePage/ArticlesHomePage";
import SuggestedCarousel from "../SuggestedCarousel/SuggestedCarousel";
import { CartContext } from "../../context/CartContext";
const ProductsHomePage = () => {
  const styles = {
    container: {
      padding: "0px 10%",
    },
    headingContainer: {
      display: "flex",
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      padding: "10px 0px",
    },
    headingText: {
      fontSize: fontSize.large,
      color: colors.accentColor,
      fontWeight: fontWeight.mediumBold,
    },
  };

  return (
    <>
      <SimplifiedDiv style={styles.container}>
        <Grid container direction="row" spacing={5}>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>Category</Text>
            </SimplifiedDiv>
            <CategoryTab />
          </Grid>
          <Grid item md={9} lg={9} xs={12} sm={12}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>Articles</Text>
            </SimplifiedDiv>
            <ArticlesHomePage />
            <SuggestedCarousel />
          </Grid>
        </Grid>
      </SimplifiedDiv>
    </>
  );
};

export default ProductsHomePage;
