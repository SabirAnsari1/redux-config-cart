import { AllRoutes } from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
