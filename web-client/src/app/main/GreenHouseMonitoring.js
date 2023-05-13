import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DateSelectorForm from "../../helpers/DateSelectorForm";
import GraphVisualization from "../../helpers/GraphVisualization";

const GreenHouseMonitoring = () => {
  const [data, setData] = useState([])

  return (
   <Box width={'100%'}>
     <DateSelectorForm setData={setData} />
     <GraphVisualization data={data} />
   </Box>
  );
}

export default GreenHouseMonitoring;
