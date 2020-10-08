import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
    className: string;
    data: number[];
    color?: string;
    coeff?: number;
    reversed?: boolean;
};
const Dots: FC<Props> = ({ className, data, color, coeff, reversed }) => {
    const distance = coeff || 9;
    const animate = (nextPosition: number): any => {
        return {
            top: nextPosition,
            // left: nextPosition,
        };
    };

    return (
        <div className={className}>
            {data.map(
                (_, i: number): ReactNode => {
                    const position = 10 + i * distance;
                    const direction = reversed ? i - 1 : i + 1;
                    const nextPosition = 10 + direction * distance;
                    return (
                        <motion.div
                            key={i}
                            initial={{
                                top: position,
                                // left: position,
                            }}
                          style={{
                            backgroundColor: color || 'red',
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            position: 'relative',
                          }}
                            // fill={color || '#0AB846'}
                            animate={{ ...animate(nextPosition) }}
                            transition={{
                                duration: 1.2,
                                loop: Infinity,
                                ease: 'linear',
                                stiffness: 1000,
                            }}
                        />
                    );
                }
            )}
        </div>
    );
};

export default Dots;
