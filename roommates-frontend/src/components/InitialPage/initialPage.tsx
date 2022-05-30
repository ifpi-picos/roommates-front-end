import React from "react";
import Title from "../Title/title";
import { Box, Card } from "./initialPage.styles";

const InitialPage = ({children}) => {
  return (
    <Box>
      <Card>
        <Title titleText="Iniciar" />

        <div>
          {children}
        </div>
      </Card>
    </Box>
  )
}

export default InitialPage
