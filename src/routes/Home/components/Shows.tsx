import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";


interface ShowsResponse {
    total: number;
    items: Show[];
    __class__: string;
    __href__: string;
    __resource_key__: string;
    __links__: Links2;
    __actions__: ExtendedMaturityRating;
}

interface Links2 {
    continuation: Resource;
}

interface Show {
    external_id: string;
    promo_description: string;
    new: boolean;
    images: Images;
    series_metadata: SeriesMetadata;
    description: string;
    id: string;
    title: string;
    __actions__: ExtendedMaturityRating;
    __class__: string;
    __href__: string;
    last_public: string;
    new_content: boolean;
    channel_id: string;
    promo_title: string;
    slug_title: string;
    slug: string;
    linked_resource_key: string;
    __links__: Links;
    type: string;
}

interface Links {
    resource: Resource;
    'resource/channel': Resource;
}

interface Resource {
    href: string;
}

interface SeriesMetadata {
    audio_locales: string[];
    availability_notes: string;
    episode_count: number;
    extended_description: string;
    extended_maturity_rating: ExtendedMaturityRating;
    is_dubbed: boolean;
    is_mature: boolean;
    is_simulcast: boolean;
    is_subbed: boolean;
    mature_blocked: boolean;
    maturity_ratings: string[];
    season_count: number;
    series_launch_year: number;
    subtitle_locales: string[];
    tenant_categories?: string[];
}

interface ExtendedMaturityRating {
}

interface Images {
    poster_tall: Poster[][];
    poster_wide: Poster[][];
}

interface Poster {
    height: number;
    source: string;
    type: string;
    width: number;
}

export default function Shows() {
    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        fetch("/api/v1/titles").then((res) => res.json()).then((res: ShowsResponse) => {
            setShows(res.items);
        });
    }, []);

    function buildSrcset(images: Poster[]) {
        let srcset = "";
        images.forEach((image) => {
            srcset += `${image.source} ${image.width}w, `;
        });

        console.log(srcset)
        return srcset;
    }

    return (
        <Box>
            {shows.map((show) => (
                <Card
                    elevation={1}
                    sx={{
                        width: 300,
                        margin: 1,
                        backgroundColor: "#333333",
                        color: "white",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            src={show.images.poster_tall[0][0].source}
                            srcSet={buildSrcset(show.images.poster_tall[0])}

                            alt={show.title}
                        />
                        <CardContent
                        >
                            <Tooltip title={show.title}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                >
                                    {show.title}
                                </Typography>
                            </Tooltip>
                            <Typography
                                variant="subtitle2"
                                style={{ color: "rgba(255,255,255,.7)" }}
                            >
                                {[show.series_metadata.series_launch_year, show.series_metadata.maturity_ratings[0], show.series_metadata.episode_count + " episodes"]
                          .filter((a) => a)
                          .join(" • ")}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    )
}