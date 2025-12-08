import ProductList from "./product/ProductList"

const Home = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <i className="bi bi-strava fs-1 text-primary me-2">premium clothing collection store</i>
                <p className="mb-1">
                    Discover the latest trends in fashion and style. 
                    <hr className="border-3 border-primary w-25 mx-auto" />
                </p>
            </div>

            <ProductList />
        </>
    )
}

export default Home