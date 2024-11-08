'use client';
import React from 'react';

import NextImg from '../common/next-img';

type Props = {
  data: any;
};

const BannerTech = ({ data }: Props) => {
  return (
    <div className="bg-[#0D0344]">
      <div
        className="custom-container pb-10 pt-16 lg:pb-12 2xl:pt-20"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-center gap-3 pb-10 lg:gap-5 lg:pb-16">
          <p className="text-center text-[32px] font-bold -tracking-[0.88px] text-[#FFF] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
            {data.titles[0].title}{' '}
            <span className="text-[#02E56A]">
              <br className="block md:hidden" />
              {data.titles[1].title}
            </span>
          </p>
          <div className="h-[1px] w-[35%] bg-[#60606B] opacity-[0.65] md:w-[28%] lg:w-[25%]"></div>
          <p className="text-sm font-bold leading-[140%] -tracking-[0.42px] text-[#FFF] lg:text-[18px]">
            {data.sub_title}
          </p>
        </div>
        <div className="relative mx-auto w-full pt-[46%]">
          <NextImg
            src={process.env.REACT_APP_IMG_URL + data.cover}
            alt="Capi"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTech;
