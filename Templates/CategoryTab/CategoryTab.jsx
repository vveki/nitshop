import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import AddIcon from "@mui/icons-material/Add";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";
import { useState } from "react";
const categories = [
  {
    name: "Sportswear",
    active: false,
    subCategory: ["Nike", "Addidas", "Puma"],
  },
  {
    name: "Mens",
    active: false,
    subCategory: ["Nike", "Addidas", "Puma"],
  },
  {
    name: "Womens",
    active: false,
  },
  {
    name: "Kids",
    active: false,
  },
  {
    name: "Fashion",
    active: false,
  },
  {
    name: "Households",
    active: false,
  },
  {
    name: "Interiors",
    active: false,
  },
  {
    name: "Clothing",
    active: false,
  },
  {
    name: "Bags",
    active: false,
  },
  {
    name: "Shoes",
    active: false,
  },
];

const CategoryTab = () => {
  const [isOpen, setIsOpen] = useState([]);

  function buttonHandler(index) {
    setIsOpen((isOpen) => {
      if (isOpen.includes(index)) {
        return isOpen.filter((i) => i !== index);
      } else {
        return [...isOpen, index];
      }
    });
  }
  const styles = {
    container: {
      border: `0.5px solid ${colors.lightGrayColor}`,
      borderRadius: "2px",
      textAlign: "left",
      padding: "15px 20px",
    },
    category: {
      padding: "5px 0px",
      listStyle: "none",
    },
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addIconStyle: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
    },
    subCategoryContainer: {
      padding: "0px 10px",
    },
    subCategoryText: {
      fontSize: fontSize.smallPlus,
      color: colors.grayColor,
      padding: "2px 0px",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      <ul style={styles.category}>
        {categories.map((cat, index) => {
          return (
            <>
              <SimplifiedDiv style={styles.categoryContainer}>
                <li style={styles.category} key={cat.name}>
                  {cat.name}
                </li>
                {cat.subCategory && (
                  <AddIcon
                    style={styles.addIconStyle}
                    onClick={() => buttonHandler(index)}
                  />
                )}
              </SimplifiedDiv>
              {cat.subCategory && isOpen.includes(index) && (
                <SimplifiedDiv style={styles.subCategoryContainer}>
                  {cat.subCategory.map((sub) => (
                    <Text key={sub} style={styles.subCategoryText}>
                      {sub}
                    </Text>
                  ))}
                </SimplifiedDiv>
              )}
            </>
          );
        })}
      </ul>
    </SimplifiedDiv>
  );
};

export default CategoryTab;
