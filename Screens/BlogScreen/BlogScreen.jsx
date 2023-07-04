import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import product1 from "../../assets/images/blog/blog-one.jpg";
import product2 from "../../assets/images/blog/blog-two.jpg";
import product3 from "../../assets/images/blog/blog-three.jpg";
import BlogCard from "../../Templates/BlogCard/BlogCard";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import { Grid } from "@mui/material";
import Footer from "../../Templates/Footer/Footer";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";
const BlogScreen = () => {
  const styles = {
    container: {
      padding: "2% 10%",
    },
    headingText: {
      fontSize: fontSize.large,
      color: colors.accentColor,
      fontWeight: fontWeight.mediumBold,
      textAlign: "center",
      marginBottom: "30px",
    },
  };
  return (
    <>
      <Navigation />
      <Grid lg={12} container style={styles.container}>
        <Grid lg={3}>
          <Text style={styles.headingText}>Category</Text>
          <CategoryTab />
        </Grid>
        <Grid lg={9}>
          <SimplifiedDiv>
            <BlogCard img={product1} />
            <BlogCard img={product2} />
            <BlogCard img={product3} />
          </SimplifiedDiv>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default BlogScreen;
