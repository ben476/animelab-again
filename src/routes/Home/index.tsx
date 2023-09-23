import { Box, Typography } from "@mui/material";
import Slides from "./components/slides";
import Shows from "./components/Shows";

export default function Home() {
    return (
        <Box>
            <Slides />
            <Shows />
        </Box>
    )
}