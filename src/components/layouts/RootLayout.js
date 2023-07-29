import Header from '../Header';
import Footer from '../Footer';
import { Box, Container } from '@mui/material';
const RootLayout = ({ children }) => {

  return (
    <Box>
      <Header />
      <Container maxWidth="xl" sx={{ py: 3, minHeight: "80vh" }} >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
export default RootLayout;
