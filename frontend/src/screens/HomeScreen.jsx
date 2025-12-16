import { React } from 'react';
import { Col, Row, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import  FeaturedProducts  from '../components/FeaturedProducts';
import Product from '../components/Product';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Oimage from '../components/Oimage';
import Testimonial from '../components/Testimonial';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import NewsLetter from '../components/NewsLetter';
import Categories from '../components/Categories';
import Features from '../components/Features';
import Inspiration from '../components/Inspiration';

const HomeScreen = () => {

  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ pageNumber }); 

  return (
    <>
    { isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
    ) : (
      <>
      <Hero />
      <Row>
        <Features />
        <FeaturedProducts />       
        <Services />
        <Oimage />
        <NewsLetter />
      </Row>
      </>
    ) } 
    </>
  )
}

export default HomeScreen