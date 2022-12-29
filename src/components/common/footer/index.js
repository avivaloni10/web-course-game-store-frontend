import {Grid, List, ListItemText, Typography, Button, Stack} from "@mui/material";
import {Box} from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

import {Colors} from "../../../styles/theme";
import {SubscribeTf, FooterTitle} from "../../../styles/footer";

export default function Footer({notifyUser}) {
    return (
        <Box
            id="footer"
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: {xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: {xs: '12px', md: '14px'}
            }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                        Hi! we are the Aloni team. Our names are Aviv and Tal and out goal is to finish the project
                        successfully.
                    </Typography>
                    <Box
                        sx={{mt: 4, color: Colors.dove_gray}}>
                        <FacebookIcon sx={{mr: 1}}/>
                        <TwitterIcon sx={{mr: 1}}/>
                        <InstagramIcon/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf color="primary" label="Email address" variant="standard"/>
                        <Button
                            startIcon={<SendIcon sx={{color: Colors.white}}/>}
                            sx={{mt: 4, mb: 4}}
                            variant="contained"
                            onClick={() => notifyUser("Thanks! We will never send you anything!")}
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
