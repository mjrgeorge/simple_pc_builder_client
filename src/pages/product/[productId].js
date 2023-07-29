import RootLayout from '@/components/layouts/RootLayout'
import { useRouter } from 'next/router';
import { Box, ButtonBase, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';

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
                            <Typography gutterBottom variant="h5" pb={1}>
                                Category:{product?.category}
                            </Typography>
                            <Typography gutterBottom variant="h6" pb={1}>
                                Status: {product?.status}
                            </Typography>
                            <Typography variant="h6" gutterBottom pb={1}>
                                Total Price: {product?.price}
                                ৳
                            </Typography>
                            <Typography variant="h6" gutterBottom pb={1}>
                                Individual Rating: {product?.individual_rating}
                            </Typography>
                            <Typography variant="h6" gutterBottom pb={1}>
                                Average Rating: {product?.average_rating}
                            </Typography>
                            <Divider />
                            <Typography variant="body1" align="justify" gutterBottom >
                                Description: {product?.description}
                            </Typography>
                            <Divider />
                            <Typography variant="h5" gutterBottom pb={1}>
                                Reviews:
                            </Typography>
                            {
                                product?.reviews?.map((review) => (
                                    <Typography variant="body2" gutterBottom key={review?.comment}>
                                        #{review?.comment}
                                    </Typography>

                                ))
                            }

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
    const res = await fetch(`http://localhost:5000/products`);
    const products = await res.json();

    const paths = products.data.map((product) => ({
        params: { productId: product._id }
    }));
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/product/${params?.productId}`);
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }
}