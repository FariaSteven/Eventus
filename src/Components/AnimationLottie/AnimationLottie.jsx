import React from 'react'
import Lottie from 'react-lottie';

export const AnimationLottie = ({animation, height, width}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <Lottie options={defaultOptions} height={height} width={width} />
  )
}
