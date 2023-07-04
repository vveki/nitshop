import React, { useEffect } from "react";
import { fetchProducts } from "../../api/userApi";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";

import { colors, fontSize, fontWeight } from "../../util/theme";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import Text from "../../components/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/productsSlice";
const ShopCategory = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.products.value.payload?.products);

  useEffect(() => {
    fetchProducts().then((allComments) => dispatch(addProducts(allComments)));
  }, []);
  console.log(select);
  const styles = {
    container: {
      padding: "2% 10%",
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
    categoryStyle: {
      marginRight: "10px",
    },
  };

  return (
    <Grid container item style={styles.container} spacing={5}>
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
        <SimplifiedDiv style={{}}>
          <Grid container item direction="row" spacing={3}>
            {select?.map((el) => {
              return (
                <Grid item lg={4} md={4}>
                  <ArticleCard
                    key={el.title}
                    title={el.title}
                    image={el.images[0]}
                    price={el.price}
                  />
                </Grid>
              );
            })}
          </Grid>
        </SimplifiedDiv>
      </Grid>
    </Grid>
  );
};

export default ShopCategory;
