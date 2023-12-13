import { Box } from "@mui/material";

import { ErrorBoundary } from "react-error-boundary";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box>
      <ErrorBoundary
        fallbackRender={() => (
          <div>Something went wrong! Please, try again later.</div>
        )}
        onError={(error) => console.error(error)}
      >
        <Outlet />
      </ErrorBoundary>
    </Box>
  );
}

export default App;
