import { Flex, Icon } from "@chakra-ui/react";

function FlexibleShape({
  w,
  h,
  px,
  py,
  direc,
  gap,
  color,
  bgColor,
  shadow,
  content,
  round,
  xposition,
  yposition,
  iconsrc,
  iconsize,
  coloricon,
}) {
  return (
    <>
      <Flex
        w={w}
        h={h}
        px={px}
        py={py}
        direction={direc}
        align={xposition}
        justify={yposition}
        gap={gap}
        color={color}
        boxShadow={shadow}
        rounded={round}
        bgColor={bgColor}>
        {content}
        <Icon as={iconsrc} boxSize={iconsize} color={coloricon} />
      </Flex>
    </>
  );
}

export default FlexibleShape;
