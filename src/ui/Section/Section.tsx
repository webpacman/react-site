import React, { ReactNode } from 'react';

import clsx from 'clsx';
import styles from './Section.module.scss';

export enum SectionTheme {
  DEFAULT = 'default',
  GRAY = 'gray',
}

interface SectionProps extends Omit<Partial<HTMLDivElement>, 'children'> {
  theme?: SectionTheme;
  center?: boolean;
  children: ReactNode;
  Tag?: 'section' | 'footer';
}

export function Section({
  className, id, theme = SectionTheme.DEFAULT, children, center, Tag = 'section',
}: SectionProps) {
  return (
    <Tag className={clsx(styles.Section, className, styles[theme], center && styles.center)} id={id}>
      {children}
    </Tag>
  );
}
