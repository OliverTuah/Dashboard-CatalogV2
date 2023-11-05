import { Button } from "@chakra-ui/react";

function Filter({
  ColorB,
  TextColor,
  SizeText,
  IconSpace,
  w,
  px,
  py,
  Alignitems,
  LIcon,
  RIcon,
  text,
  fontType,
  setButton,
}) {
  return (
    <>
      <Button
        onClick={() => setButton()}
        bgColor={ColorB}
        textColor={TextColor}
        fontSize={SizeText}
        fontWeight={fontType}
        iconSpacing={IconSpace}
        w={w}
        px={px}
        py={py}
        justifyContent={Alignitems}
        rightIcon={RIcon}
        leftIcon={LIcon}>
        {text}
      </Button>
    </>
  );
}

export default Filter;
