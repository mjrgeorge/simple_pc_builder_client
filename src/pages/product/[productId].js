import RootLayout from '@/components/layouts/RootLayout'
import { useRouter } from 'next/router';
import { Avatar, Box, ButtonBase, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ImageIcon from '@mui/icons-material/Image';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
});

const ProductDetailsPage = ({ product }) => {
    const router = useRouter();
    return (
        <Container maxWidth="lg">
            <Paper variant='outlined' sx={{ p: 3 }}>
                <Typography variant="h3" gutterBottom>
                    Product Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid container item xs={12} sm={5}>
                        <Grid item xs>
                            <ButtonBase>
                                <Img src={product?.image} alt={product?.product_name} />
                            </ButtonBase>
                            <Typography variant="h5" gutterBottom>
                                {product?.product_name}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Divider orientation="vertical" variant="middle" sx={{ marginLeft: 3 }} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={7} container>
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                {product?.product_name}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                Category:{product?.category}
                            </Typography>
                            <Typography gutterBottom>
                                Status: {product?.status}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Price: {product?.price}
                                ৳
                            </Typography>
                            <Typography component="legend">
                                Individual Rating:
                            </Typography>
                            <Rating name="read-only" value={product?.individual_rating} readOnly />
                            <Typography component="legend">
                                Average Rating:
                            </Typography>
                            <Rating name="read-only" value={product?.average_rating} readOnly />
                            <Divider />
                            <Typography variant="h6" align="justify" gutterBottom >
                                Description:
                            </Typography>
                            <Typography variant="body1" align="justify" gutterBottom >
                                Description: {product?.description}
                            </Typography>
                            <Divider />
                            <Typography variant="h6" gutterBottom>
                                Reviews:
                            </Typography>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    product?.reviews?.map((review) => (
                                        <Box key={review?.comment}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={review?.comment}
                                                />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </Box>

                                    ))
                                }

                            </List>

                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default ProductDetailsPage

ProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://simple-pc-builder-server.vercel.app/products`);
    const products = await res.json();

    const paths = products.data.map((product) => ({
        params: { productId: product._id }
    }));
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://simple-pc-builder-server.vercel.app/product/${params?.productId}`);
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }
}