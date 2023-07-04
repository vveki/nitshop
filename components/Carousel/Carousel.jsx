import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import Text from "../Text/Text";
import { colors, fontFamily, fontSize } from "../../util/theme";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import { getScreenWidth } from "../../util/helper";

const Carousel = ({ data }) => {
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      left: 10,
      right: 10,
    },
  };
  const screenWidth = getScreenWidth();
  const textScreen = screenWidth === "LG" ? true : false;
  return (
    <SliderCarousel
      width="100%"
      axis="horizontal"
      showIndicators
      showThumbs={false}
      interval={7000}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
    >
      {data.map((d) => (
        <div key={d} style={{ height: "400px" }}>
          {!textScreen && (
            <Text
              fontSize={fontSize.xLarge}
              color={colors.gray}
              textAlign="center"
            >
              {d.imgText}
            </Text>
          )}
          <img
            src={d.imgSrc}
            style={{ height: "100%", objectFit: "contain" }}
            alt={d.imgText}
          />
          <SimplifiedDiv style={styles.carouselText}>
            {textScreen && (
              <Text
                fontFamily={fontFamily.LatoRegular}
                fontSize={fontSize.xLarge}
                color={colors.gray}
                textAlign="left"
              >
                {d.imgText}
              </Text>
            )}
          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
