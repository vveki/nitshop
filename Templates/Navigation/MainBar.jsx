import React, { useContext } from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize, fontFamily } from "../../util/theme";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import { getScreenWidth } from "../../util/helper";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const iconStyle = {
  fontFamily: fontFamily.LatoRegular,
  fontSize: fontSize.normal,
  color: colors.grayColor,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();

  const rightMenuMargin = screenWidth === "SM" ? "20px 5px" : "0px";
  const rightMenuJustify = screenWidth === "SM" ? "flex-start" : "flex-end";
  const rightmenuItemsMargin = screenWidth === "SM" ? "0px 5px" : "0px 10px";
  const { user } = useContext(UserContext);
  const RightMenu = () => (
    <CustomDiv
      display="flex"
      alignItems="center"
      justifyContent={rightMenuJustify}
      width="100%"
      height="100%"
      margin={rightMenuMargin}
    >
      <CustomDiv display="flex" margin={rightmenuItemsMargin}>
        <PersonIcon style={iconStyle} />
        <Link to="/checkout" style={iconStyle}>
          {user?.name ? user.name : "Account"}
        </Link>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightmenuItemsMargin}>
        <StarIcon style={iconStyle} />
        <Link to="/checkout" style={iconStyle}>
          Wishlist
        </Link>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightmenuItemsMargin}>
        <LocationSearchingIcon style={iconStyle} />
        <Link to="/checkout" style={iconStyle}>
          Checkout
        </Link>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightmenuItemsMargin}>
        <ShoppingCartIcon style={iconStyle} />
        <Link to="/cart" style={iconStyle}>
          Cart
        </Link>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightmenuItemsMargin}>
        <LockIcon style={iconStyle} />
        <Link to="/login" style={iconStyle}>
          Login
        </Link>
      </CustomDiv>
    </CustomDiv>
  );

  const alignLogo = screenWidth === "SM" ? "center" : "left";
  const mainDivPadding = screenWidth === "SM" ? "20px 0px" : "20px 10% 10px";

  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="auto"
      padding={mainDivPadding}
      border="0px"
    >
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SimplifiedDiv
            style={{
              textAlign: alignLogo,
            }}
          >
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: 140,
                  height: "auto",
                }}
              />
            </Link>
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width="100%"
          height="2px"
          margin="20px 0px"
          borderBottom="0.2px solid #b3b1b1"
        />
      </Grid>
    </CustomDiv>
  );
};
export default MainBar;
