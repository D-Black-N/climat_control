import { Box } from "@chakra-ui/react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

const GraphVisualization = ({  }) => {
  // const renderLineChart = (
  //   <LineChart width={400} height={400} data={data}>
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //   </LineChart>
  // );

  const data = [
    { name: '0', uv: 20, pv: 2400, amt: 2400 },
    { name: '1', uv: 19.5, pv: 24000, amt: 2400 },
    { name: '2', uv: 19, pv: 2400, amt: 2400 },
    { name: '3', uv: 18, pv: 2400, amt: 2400 },
    { name: '4', uv: 15, pv: 2400, amt: 2400 },
    { name: '5', uv: 14, pv: 2400, amt: 2400 },
    { name: '6', uv: 14, pv: 2400, amt: 2400 },
    { name: '7', uv: 16, pv: 2400, amt: 2400 },
    { name: '8', uv: 17.5, pv: 2400, amt: 2400 },
    { name: '9', uv: 20, pv: 2400, amt: 2400 },
    { name: '10', uv: 21, pv: 2400, amt: 2400 },
  ]

  return (
    <Box mt={5}>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" width={5} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" name="часы" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Box>
  )
}

export default GraphVisualization;
