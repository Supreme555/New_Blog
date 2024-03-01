import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const Article = ({ title, description, image_url, image_url_2, image_url_3, price, created_date }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div className="mb-5">
      <h1 className='article-title'>{title}</h1>
      <p className='text-muted'><small>Дата создания:{created_date}</small></p>
      <div>
        <Swiper pagination={pagination} rewind={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          <SwiperSlide><img src={image_url}></img></SwiperSlide>
          <SwiperSlide><img src={image_url_2}></img></SwiperSlide>
          <SwiperSlide><img src={image_url_3}></img></SwiperSlide>
        </Swiper>
      </div>
      <p className='mt-3'>{description}</p>
      <a href="https://web.telegram.org/" target='_blank' className="btn btn-danger">Получить доступ за {price}$</a>
    </div>
  );
};

export default Article;
