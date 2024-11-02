import { type FC } from 'react';

import { Button } from 'reakit/Button';

import { useFirstMount } from '~/hooks/useFirstMount';
import * as format from '~/utils/format';

import { FooterTransitionTrigger } from './FooterTransitionTrigger/FooterTransitionTrigger';
import { MadeBy } from './MadeBy/MadeBy';

import styles from './Footer.module.css';

type Props = {
  isNavigationHeaderHidden: boolean;
  onEmailDialogOpen: () => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
  onProgressChange: (progress: number) => void;
};

export const Footer: FC<Props> = ({
  isNavigationHeaderHidden,
  onEmailDialogOpen,
  onNavigationHeaderTrigger,
  onProgressChange,
}) => {
  const lastUpdated = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED);

  const isFirstMount = useFirstMount();

  return (
    <>
      <FooterTransitionTrigger
        onNavigationHeaderTrigger={onNavigationHeaderTrigger}
        onProgressChange={onProgressChange}
      />

      <footer className={styles.footer}>
        <Button
          className={styles.contactButton}
          onClick={onEmailDialogOpen}
        >
          <span>Contact me</span>
          <span
            aria-hidden
            className={styles.contactButtonDecoration}
          >
            {'>'}
          </span>
        </Button>
        <MadeBy />

        {isNavigationHeaderHidden && (
          <div className={styles.background} />
        )}
      </footer>
    </>
  );
};
