import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import ErrorImg from '../../assets/error-page.png'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='container'>
            <div className='d-md-flex justify-content-evenly'>
                <div className='text-center mt-5 pt-5'>
                    <h2 className='mb-8 font-bold display-1 mt-5'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='fs-4 font-bold mb-4'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded btn btn-warning'
                    >
                        Back to homepage
                    </Link>
                </div>
                <div>
                    <img src={ErrorImg} className='w-100 text-center' alt="" />
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
