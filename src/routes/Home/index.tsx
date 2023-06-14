import { Box, Typography } from "@mui/material";
import Slides from "./components/slides";

export default function Home() {
    return (
        <Box>
            <Slides />
            <Typography variant="h1">Hello World</Typography>
        </Box>
    )
}