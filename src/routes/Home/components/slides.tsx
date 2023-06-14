import { Box, Button, IconButton, Typography } from "@mui/material";
import { ChevronLeft as Back, ChevronRight as Forward } from "@mui/icons-material";
import styles from "./slides.module.css"
import { Link } from "react-router-dom";
import { slides } from "./slidesData";
import { forwardRef, useRef } from "react";

export type SlideProps = {
    title: string;
    subtitle?: string;
    image: string;
    action: string;
    link: string;
    key?: number;
};

export const Slide = forwardRef(({ title, subtitle, image, action, link, key }: SlideProps, ref) => {
    return (
        <Box className={styles.slide} style={{ backgroundImage: `url(${image})` }} id={"#slide-" + key?.toString()} ref={ref}>
            <span className={styles.slideOverlay} />
            <span className={styles.slideOverlay2} />
            <Box className={styles.slideContent}>
                <Typography variant="h1" className={styles.slideTitle}>
                    {title}
                </Typography>
                <Typography variant="body1" className={styles.slideSubtitle}>
                    {subtitle}
                </Typography>
                <Button variant="contained" className={styles.slideButton} href={link} LinkComponent={Link}>
                    {action}
                </Button>
            </Box>
        </Box>
    );
})

export default function Slides() {
    const slideRef = slides.map(() => useRef<HTMLDivElement>(null));

    function findLargestSlide() {
        let largestSlide = 0;
        let largestWidth = 0;
        slideRef.forEach((slide, index) => {
            const boundingRect = slide.current?.getBoundingClientRect();
            if (boundingRect) {
                const start = Math.max(boundingRect.left, 0);
                const end = Math.min(boundingRect.right, window.innerWidth);
                const width = end - start;
                if (width > largestWidth) {
                    largestWidth = width;
                    largestSlide = index;
                }
            }
        });
        return largestSlide;
    }

    return (
        <Box className={styles.carousel}>
            <IconButton className={styles.carouselButton} style={{ left: 0 }} onClick={() => {
                const largestSlide = findLargestSlide();
                slideRef[(largestSlide - 1 + slides.length) % slides.length].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            }}>
                <Back style={{ fontSize: 75 }} />
            </IconButton>
            <Box className={styles.carouselContent}>
                {slides.map((slide, index) => (
                    <Slide key={index} {...slide} ref={slideRef[index]} />
                ))}
            </Box>
            <IconButton className={styles.carouselButton} style={{ right: 0 }} onClick={() => {
                const largestSlide = findLargestSlide();
                slideRef[(largestSlide + 1) % slides.length].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            }}>
                <Forward style={{ fontSize: 75 }} />
            </IconButton>
        </Box>
    );
}