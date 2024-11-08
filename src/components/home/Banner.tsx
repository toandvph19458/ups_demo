'use client';
import React from 'react';
import { MarqueeDemo } from './Marquee';
import NextImg from '../common/next-img';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

type Props = {
  data: any;
};
interface User {
  name: string;
  image: string;
  percentage: string;
}

const userData: User[] = [
  {
    name: 'Trần Hoài Trang',
    image: '/assets/image/user1.jpg',
    percentage: '+7.90%',
  },
  {
    name: 'Phí Ngọc Thắng',
    image: '/assets/image/user2.jpg',
    percentage: '+ 8.30%',
  },
  {
    name: 'Nguyễn Trung Anh',
    image: '/assets/image/user3.jpg',
    percentage: '+ 11.40%',
  },
  {
    name: 'Nguyễn Thái Nhi',
    image: '/assets/image/user4.jpg',
    percentage: '+ 5.60%',
  },
  {
    name: 'Trần Anh Tuấn',
    image: '/assets/image/user5.jpg',
    percentage: '+ 6.20%',
  },
];
const Banner = ({ data }: Props) => {
  return (
    <div className="relative mx-auto mt-[-15px] bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)] pt-20 lg:pt-16 2xl:pt-[90px] 3xl:pt-[100px]">
      <div className="custom-container flex justify-center" data-aos="fade-up">
        <div className="mx-auto flex flex-col items-center justify-center">
          <div className="relative h-10 w-10 md:h-[56px] md:w-[56px]">
            <NextImg
              src={process.env.REACT_APP_IMG_URL + data?.icon}
              alt="UPS"
              objectFit="cover"
            />
          </div>
          <p className="pt-2 text-center text-[14px] font-medium leading-normal text-[#FFF] md:pt-[16px] lg:text-base">
            UP Securities
          </p>
          <h1 className="mt-[14px] text-center text-[32px] font-bold leading-normal -tracking-[0.64px] text-[#FFF] md:text-[40px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[52px] lg:tracking-[-0.92px] xl:text-[56px] xl:leading-[62px] xl:tracking-[-1.12px] 2xl:text-[66px] 2xl:leading-[72px] 2xl:tracking-[-1.32px] 3xl:text-[76px] 3xl:leading-[82px] 3xl:tracking-[-1.52px]">
            {data?.title.map((item: any, index: number) => {
              return (
                <span key={index}>
                  {item.title} <br className="hidden md:block" />
                </span>
              );
            })}
          </h1>
          <div className="flex items-center gap-[20px] pt-6 md:pt-8 lg:pt-[52px]">
            <Link href={data.cta.cta1.url}>
              <button className="btn active">
                {data.cta.cta1.content_cta}
                <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                  <NextImg
                    src="/assets/icons/UPs.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </button>
            </Link>
            <p className="hidden text-base font-medium leading-normal text-[#8C9AA4] md:block">
              {data.cta.cta2.content1} <br />
              {data.cta.cta2.content2}
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-6 flex max-w-full flex-col items-center gap-4 px-0 md:mt-10 md:max-w-[700px] md:flex-row md:gap-6 md:px-6 lg:mt-[50px] lg:max-w-[870px] lg:px-0 xl:max-w-[1130px] 2xl:mt-[60px] 2xl:max-w-[1390px] 2xl:gap-9 3xl:mt-[70px]"
        data-aos="fade-up"
      >
        <p className="text-sm font-medium text-[#FFF] md:w-20 md:min-w-20 lg:w-[110px] lg:min-w-[110px] lg:text-xl">
          Top đầu tư của tuần
        </p>
        <div className="scrollbar-hidden flex max-w-full items-center gap-3 overflow-x-auto whitespace-nowrap md:gap-6 lg:px-0 xl:gap-9">
          {userData.map((user, index) => (
            <div
              className={`flex items-center gap-3 md:gap-5 ${index === 0 ? 'ml-6 md:ml-auto' : ''}`}
              key={index}
            >
              <div className="relative h-10 w-10 lg:h-[54px] lg:w-[54px]">
                <NextImg
                  src={user.image}
                  alt={user.name}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#FFF] lg:text-xl">
                  {user.name}
                </span>
                <span className="text-xs font-medium text-[#05BE5A] lg:text-base">
                  {user.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up">
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default Banner;
