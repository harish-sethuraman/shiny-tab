import { AnimationConfig, animated, useSpring } from "react-spring";
import React from "react";
import cn from "classnames";

import { useCallback, useEffect, useMemo } from "react";

const getBorderRadius = (index: number, links: Links[]) => {
  return index === 0
    ? "500px 120px 120px 500px"
    : index === links.length - 1
    ? "120px 500px 500px 120px"
    : "500px 500px 500px 500px";
};

export interface Links
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> {
  title: string;
  icon: React.ReactNode;
  onClick: (activeIndex: number) => void;
}
interface HeaderProps {
  links: Links[];
  activeIndex: number;
  config?: AnimationConfig;
}

const Header = ({ links, activeIndex = 0, config }: HeaderProps) => {
  const headerConfig = useMemo(
    () => ({
      damping: 20,
      mass: 1,
      ...(config ? config : {}),
    }),
    [config]
  );

  const pillCoordinates = useCallback(
    (index: number) => {
      return () => ({
        borderRadius: getBorderRadius(index, links),
        transform: `translateX(${index * 100}%)`,
        config: headerConfig,
      });
    },
    [headerConfig, links]
  );

  const [focusPills, focusPillsApi] = useSpring(() => ({
    borderRadius: `500px 120px 120px 500px`,
    transform: `translateX(0%)`,
    config: headerConfig,
  }));

  const [bottomGradient, bottomGradientApi] = useSpring(() => ({
    backgroundPositionX: "0%",
    config: headerConfig,
  }));

  const handleActiveChange = useCallback(
    (index: number) => {
      bottomGradientApi.start({
        backgroundPositionX:
          ((links.length - index) / links.length) * 100 + "%",
        config: headerConfig,
      });
      focusPillsApi.start(pillCoordinates(index));
    },
    [
      bottomGradientApi,
      links.length,
      headerConfig,
      focusPillsApi,
      pillCoordinates,
    ]
  );

  useEffect(() => {
    handleActiveChange(activeIndex);
  }, [activeIndex, handleActiveChange]);

  return (
    <animated.div
      style={bottomGradient}
      className={cn(
        "pb-[1px] relative overflow-hidden w-fit h-fit rounded-full m-auto",
        "bg-[linear-gradient(to_left,_rgb(51,_51,_51,_0.5)_20%,_rgb(255,_255,_255,_0.5)_44%,_rgb(153,_153,_153,_0.5)_50%,_rgb(68,_68,_68,_0.5)_60%,_rgb(51,_51,_51,_0.5)_63%,_rgb(255,_255,_255,_0.5)_100%)]",
        "bg-[200%_auto]"
      )}
    >
      <div className="flex border-[0.5px] bg-black border-neutral-600 rounded-full border-b-0 p-1 overflow-hidden bg-opacity-90">
        {links.map(({ onClick, title, icon }, index) => {
          return (
            <button
              key={title}
              onClick={() => {
                onClick(index);
                handleActiveChange(index);
              }}
              className={cn(
                "m-1 sm:m-2 text-sm relative sm:min-w-[70px] min-w-[40px] font-normal flex justify-center",
                "rounded-full",
                activeIndex === index
                  ? "text-white drop-shadow-[rgb(255_255_255_/_57%)_1px_1px_12px]"
                  : "text-neutral-400 hover:text-white transition-colors duration-250"
              )}
            >
              <p className="sm:block hidden">{title}</p>
              <div className="sm:hidden flex items-center justify-center pointer-events-none">
                {icon}
              </div>
            </button>
          );
        })}
        <animated.div
          className={
            "absolute left-0 top-0 w-12 sm:w-[86px] px-3 h-4/5 m-1 bg-white bg-opacity-10 translate-x-0"
          }
          style={focusPills}
        />
        <animated.div
          className="absolute h-10 w-12 sm:w-[86px] opacity-20 -bottom-4 rounded-full bg-white !blur-md translate-x-0"
          style={focusPills}
        />
      </div>
    </animated.div>
  );
};

export default Header;
