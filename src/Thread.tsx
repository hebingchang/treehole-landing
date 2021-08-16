import * as React from "react"
import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const ThreadPage = () => {
  let { id, floor } = useParams();

  useEffect(() => {
    window.open(floor ? `treehole://thread/${id}/${floor}` : `treehole://thread/${id}`)
  }, [id, floor])

  return <Box textAlign="center" fontSize="xl" height='100%'>

  </Box>
}
