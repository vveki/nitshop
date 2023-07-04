import React from "react";
import { Card } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
import { colors, fontSize, fontWeight } from "../../util/theme";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
const ArticleCard = ({
  title,
  description,
  image,
  price,
  article,
  onClickButton,
}) => {
  const styles = {
    imageContainer: {
      width: "100%",
      height: "x`",
    },
    image: {
      objectFit: "contain",
      width: "100%",
      height: "200px",
    },

    descriptionContainer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      gap: "10px",
      margin: "10px 15px",
    },
    buttonHolder: {
      display: "flex",
      justifyContent: "center",
      padding: "10px",
    },
    shoppingCartIcon: {
      fontSize: fontSize.normal,
      margin: "0px 3px",
    },
  };
  const altTag = title !== "" ? title : "Article Image";

  return (
    <Card>
      <SimplifiedDiv style={styles.imageContainer}>
        <img alt={altTag} style={styles.image} src={image} />
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.descriptionContainer}>
        <Text
          color={colors.accentColor}
          fontWeight={fontWeight.mediumBold}
          fontSize={fontSize.large}
        >
          {price}$
        </Text>
        <Text fontSize={fontSize.medium}>{title}</Text>
        <Text color={colors.lightBlack} fontSize={fontSize.optimal}>
          {description?.length > 70
            ? description.slice(0, 70) + "..."
            : description}
        </Text>
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.buttonHolder}>
        <PrimaryButton
          onClick={() => onClickButton(article)}
          primary
          borderRadius="3px"
          padding="10px"
        >
          <ShoppingCartOutlined style={styles.shoppingCartIcon} />
          Add to cart!
        </PrimaryButton>
      </SimplifiedDiv>
    </Card>
  );
};
export default ArticleCard;
