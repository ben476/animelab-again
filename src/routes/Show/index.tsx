import * as React from 'react';
import { Box, Button, Chip, Rating, Typography } from "@mui/material";
import styles from './show.module.css';
import { useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/material';
import { PlayArrowOutlined } from '@mui/icons-material';
import genres from "./genres.json"

// https://remix.run/guides/routing#index-routes
export default function Home() {
    const theme = useTheme();
    const show = {
        "id": 491,
        "name": "Demon Slayer",
        "seasons": {
            "Season 1": 26,
            "TV Specials": 3
        },
        "episodes": 29,
        "tagline": "Slay the Demons Even If It Means Your Ruin",
        "shortSynopsis": "Bloodthirsty demons lurk in the woods, and nobody dares to venture out at night, save for the demon slayer of legend. Surviving in this harsh world, young Tanjirou takes it upon himself to protect his family–until the day that everything is taken from him in a vicious slaughter. Now, all he has left is his sister, and she’s not even human anymore.",
        "longSynopsis": "Bloodthirsty demons lurk in the woods, and nobody dares to venture out at night, save for the demon slayer of legend. Surviving in this harsh world, young Tanjirou takes it upon himself to protect his family–until the day that everything is taken from him in a vicious slaughter. Now, all he has left is his sister, and she’s not even human anymore.",
        "slug": "demon-slayer",
        "year": "2019",
        "original": "Kimetsu no Yaiba",
        "languages": [
            "Japanese",
            "English"
        ],
        "subtitled": true,
        "spoken": true,
        "rating": 97.13,
        "thumbnail": "demon-slayer_portrait-key-art-clean-thumb_58859.webp",
        "portrait": "demon-slayer_portrait-key-art-normal-medium_58863.webp",
        "smallPortrait": "demon-slayer_portrait-key-art-normal-small_58856.webp",
        "largePortrait": "demon-slayer_portrait-key-art-normal-large_58864.webp",
        "stage": "demon-slayer_stage-key-art-clean-large_62116.webp",
        "wide": "demon-slayer_widescreen-key-art-normal-medium_58861.webp",
        "square": "demon-slayer_itunes-tv-cover_58862.webp",
        "genres": [
            "Adventure",
            "Fantasy",
            "Historical",
            "Martial Arts"
        ],
        "simulcastStartDate": 1554561000000,
        "simulcastEndDate": 1570890600000,
        "isMovie": null,
        "ratingCode": "R13",
        "mature": false,
        "copyright": "©Koyoharu Gotoge / SHUEISHA, Aniplex, ufotable"
    }

    return (
        <Box>
            <Box component="picture" sx={(theme) => ({
                width: "100%",
                aspectRatio: "16/9",
                [theme.breakpoints.up("md")]: {
                    aspectRatio: "3",
                    maxHeight: "30vw",
                    objectFit: "cover",
                },
            })}>
                <source srcSet={`https://anime.benhong.me/img/anime/${show.stage || show.wide}`} media={`(min-width: ${theme.breakpoints.values.md}px)`} className={`${styles.banner} ${show.stage && styles.stage}`} />
                <source srcSet={`https://anime.benhong.me/img/anime/${show.wide}`} media={`(max-width: ${theme.breakpoints.values.md}px)`} className={styles.banner} />
                <img src={`https://anime.benhong.me/img/anime/${show.wide}`} alt={show.name} className={styles.banner} />
            </Box>
            <Grid2 container spacing={2} sx={(theme) => ({
                paddingInline: theme.spacing(8),
                [theme.breakpoints.up("md")]: {
                    paddingLeft: theme.spacing(12),
                },
                [theme.breakpoints.up("lg")]: {
                    paddingLeft: theme.spacing(16),
                },
                [theme.breakpoints.up("xl")]: {
                    paddingLeft: theme.spacing(32),
                },
            })}>
                <Grid2 xs={0} md={4} lg={3} sx={{ position: "relative" }}>
                    <Box component="img"
                        src={`https://anime.benhong.me/img/anime/${show.portrait}`}
                        height={1200}
                        width={800}
                        style={{
                            width: "100%",
                            height: "auto",
                            // boxShadow: "11px -12px 37px 0 rgba(0,0,0,.3)",
                            borderRadius: '4px',
                            marginTop: show.stage || show.wide ? "-30%" : "-10px",
                            position: "absolute"
                            // zIndex: 1
                        }}
                    />
                </Grid2>
                <Grid2 xs={12} md={8} lg={9} sx={(theme) => ({
                    padding: 0,
                    [theme.breakpoints.up("md")]: {
                        padding: theme.spacing(6),
                    },
                })}>
                    {/* <Stack spacing={1}> */}
                    <Box>
                        <Typography
                            variant={show.name.length > 25 ? "h3" : "h2"}
                            style={{ fontWeight: 600 }}
                        >
                            {show.name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontStyle: "italic", fontWeight: 400, marginTop: -1, paddingLeft: "2px" }}>
                            {show.original}
                        </Typography>
                    </Box>
                    <Rating
                        name="read-only"
                        sx={(theme) => ({
                            marginTop: 1.5,
                            '& .MuiRating-iconFilled': {
                                color: theme.palette.secondary.main
                            }
                        })}
                        value={(show.rating / 100) * 5}
                        color='secondary'
                        readOnly
                    />
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        {[show.year, show.ratingCode, show.languages.join(" and ")]
                            .filter((a) => a)
                            .join(" • ")}
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2} sx={(theme) => ({
                paddingInline: theme.spacing(8),
                [theme.breakpoints.up("md")]: {
                    paddingLeft: theme.spacing(12),
                },
                [theme.breakpoints.up("lg")]: {
                    paddingLeft: theme.spacing(16),
                },
                [theme.breakpoints.up("xl")]: {
                    paddingLeft: theme.spacing(32),
                },
                backgroundColor: "#35017A",
                marginTop: 2
            })}>
                <Grid2 xs={0} md={4} lg={3} sx={{ position: "relative" }}>
                </Grid2>
                <Grid2 xs={12} md={8} lg={9} sx={(theme) => ({
                    padding: 0,
                    [theme.breakpoints.up("md")]: {
                        padding: theme.spacing(6),
                    },
                })}>
                    <Button
                        sx={{
                            width: "auto",
                            marginTop: 0,
                            height: "4em",
                        }}
                        variant="contained"
                        color="primary"
                        endIcon={<PlayArrowOutlined style={{ fontSize: "42px" }} />}
                    >
                        <Typography variant="button" sx={{ marginTop: "-0.1em", marginInline: "0.5em", fontSize: "2em", textTransform: "none" }}>
                            <span style={{ fontWeight: 600 }}>
                                Watch
                            </span>
                            <span style={{ fontWeight: 400 }}>
                                {" "}Season 1 Episode 13
                            </span>
                        </Typography>
                    </Button>
                    {/* </Stack> */}
                    <Typography variant="h5" sx={{ marginTop: 8 }}>
                        {show.tagline}
                    </Typography>
                    <Typography
                        // variant="body"
                        sx={{ color: "rgba(255,255,255,.8)", marginTop: 3, maxWidth: 800 }}
                    // offset={show.original ? 0 : 1}
                    >
                        {show.longSynopsis}
                    </Typography>
                    <Box sx={{ marginTop: 5 }}>
                        {show.genres.map((genre) => (
                            <Chip
                                //   component={Link}
                                clickable
                                // to={`/genres/${genre.toLowerCase().replaceAll(" ", "-")}`}
                                size="small"
                                variant="outlined"
                                label={genres[genre]?.name || genre}
                                sx={{
                                    fontSize: "15px",
                                    // height: "22px",
                                    marginRight: "5px",
                                    paddingInline: 1,
                                    // textAlign: "center",
                                    // color: "rgba(255,255,255,.9)",
                                    '& .MuiChip-label': {
                                        marginTop: "-2px"
                                    },
                                }}

                            />
                        ))}
                    </Box>
                    <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        sx={{ marginTop: 3 }}
                    >
                        {show.copyright}
                    </Typography>
                </Grid2>
            </Grid2>
        </Box >
    )
}