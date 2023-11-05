import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

function UpdatePenjualan({ text1, text2, text3, colorMain }) {
  return (
    <>
      <Stat>
        <StatLabel
          textColor={"#828282"}
          fontWeight={"Regular"}
          fontSize={"16px"}>
          {text1}
        </StatLabel>
        <StatNumber textColor={colorMain} fontWeight={"Bold"} fontSize={"28px"}>
          {text2}
        </StatNumber>
        <StatHelpText
          textColor={"#828282"}
          fontWeight={"Regular"}
          fontSize={"16px"}>
          {text3}
        </StatHelpText>
      </Stat>
    </>
  );
}

export default UpdatePenjualan;
