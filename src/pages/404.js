import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push('/');
    }, 5000);
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJ_R_-rDXaokpjrPRVqtFi_L4qbC7VjGsaQ&usqp=CAU" alt="Not Found" width='100%' />
        </div>
    );
};

export default ErrorPage;