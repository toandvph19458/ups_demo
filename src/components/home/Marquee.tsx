import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { useRef, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/vcb.svg',
  },
  {
    id: 2,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/mb.svg',
  },
  {
    id: 3,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/fpt.svg',
  },
  {
    id: 4,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/aau.svg',
  },
  {
    id: 5,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/petrovn.svg',
  },
  {
    id: 6,
    name: 'Ngân hàng Thương Mại ',
    username: 'Cổ Phần Á Châu',
    body: '15.00',
    img: '/assets/image/chaua.svg',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty('--start', `${angle + 60}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="group/card relative">
      <figure
        className={cn(
          'z-1 card relative flex h-[77px] w-[188px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl px-3 py-2 lg:h-[113px] lg:w-[280px] lg:px-5 lg:py-4 lg2:h-[140px] lg2:w-[300px] xl:h-[150px] 3xl:h-[160px]',
          // light styles
          'rounded-[16px] border-[#161F15] bg-[#161F15]',
          // dark styles
          'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="flex flex-row items-center gap-5">
          <img
            className="h-8 w-8 rounded-full lg:h-[60px] lg:w-[60px]"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <p className="text-xs font-medium text-[#8D9595] group-hover/card:text-white lg:text-base">
              {name}
            </p>
          </div>
        </div>
        <div>
          <span className="font-hanken-grotesk mt-2 flex items-start text-base font-medium leading-normal text-[#075728] group-hover/card:text-[#05BE5A] lg:text-2xl lg2:text-3xl">
            {body}{' '}
            <i className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-4 w-4 lg:h-6 lg:w-6"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7595 5.98952C18.7595 5.7906 18.6805 5.59984 18.5398 5.45919C18.3991 5.31853 18.2084 5.23952 18.0095 5.23952L9.42519 5.23952C9.01098 5.23952 8.67519 5.5753 8.67519 5.98952C8.67519 6.40373 9.01098 6.73952 9.42519 6.73952L16.1993 6.73952L5.4586 17.4802C5.16571 17.7731 5.16571 18.2479 5.4586 18.5408C5.75149 18.8337 6.22637 18.8337 6.51926 18.5408L17.2595 7.80062V14.5738C17.2595 14.988 17.5953 15.3238 18.0095 15.3238C18.4237 15.3238 18.7595 14.988 18.7595 14.5738L18.7595 5.98952Z"
                  fill="#075728"
                />
              </svg>
            </i>
          </span>
        </div>
        <div
          className={cn(
            'pointer-events-none absolute left-0 top-0 z-[99] h-[250px] w-[250px] rounded-full bg-green-500 opacity-50',
            { hidden: !isHovered },
          )}
          style={{
            transform: `translate(${position.x - 120}px, ${position.y - 120}px)`,
            background:
              'radial-gradient(circle, rgba(0,255,0,0.5) 0%, rgba(0,255,0,0) 70%)',
          }}
        ></div>
      </figure>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mt-[30px] flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg md:mt-10 md:shadow-xl lg:mt-8 lg2:mt-10 xl:mt-[52px] 2xl:mt-20 3xl:mt-[100px]">
      <Marquee pauseOnHover className="[--duration:20s]" repeat={10}>
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="!md:mb-10 mb-[22px] [--duration:20s] lg:mb-12 lg2:mb-8 xl:mb-[34px] 2xl:mb-11 3xl:mb-[54px]"
        repeat={10}
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
  );
}
