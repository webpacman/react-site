import React, {
  CSSProperties, FC, ReactNode,
} from 'react';
import clsx from 'clsx';
import styles from './Flex.module.scss';

interface FlexProps {
  align?: 'alignCenter' | 'alignStart' | 'alignEnd';
  justify?: 'justifyStart' | 'justifyEnd' | 'justifyCenter' | 'justifyBetween' | 'justifyEvently';
  gap?: number;
  inline?: boolean;
  className?: string;
  children?: ReactNode
}

export const Flex: FC<FlexProps> = ({
  align = 'start', justify = 'start', gap, inline = false, className, children,
}) => {
  const classes = clsx(inline ? styles.inline : styles.Flex, className, styles[align], styles[justify]);

  const inlineStyles: CSSProperties = {};
  if (gap) {
    inlineStyles.gap = gap;
  }

  return <div className={classes} style={inlineStyles}>{children}</div>;
};
