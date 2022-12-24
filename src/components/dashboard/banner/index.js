import {Typography} from "@mui/material";

import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle
} from "../../../styles/banner";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Games
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Games are an essential part of a student’s life.
                    Their value shouldn’t be undermined with that of education.
                    What education does to your career, games do to your overall personality.
                </BannerDescription>

                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}
