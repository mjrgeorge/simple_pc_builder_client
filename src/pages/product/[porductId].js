import RootLayout from '@/components/layouts/RootLayout'
import React from 'react'

const ProductDetailsPage = ({ params }) => {
    return (
        <div>
            <h1>hello</h1>
            <pre>{JSON.stringify(params, null, 4)}</pre>
        </div>
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