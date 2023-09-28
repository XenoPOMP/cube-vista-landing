import cn from 'classnames';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import Button from '@/src/components/ui/Button/Button';
import OnlineBadge from '@/src/components/ui/OnlineBadge/OnlineBadge';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './AboutServerSection.module.scss';
import type { AboutServerSectionProps } from './AboutServerSection.props';

const AboutServerSection: FC<AboutServerSectionProps> = ({}) => {
  return (
    <UiContainer className={cn(styles.aboutServer)}>
      <article className={cn(styles.leftColon)}>
        <h2>Про сервер</h2>

        <div className={cn(styles.textBlock)}>
          <p>
            The best Minecraft server to ever exist. We have been working on
            fixing some of the more critical issues that have come up. This
            migration is a major change, so some features may have issues or are
            missing entrirely.
          </p>

          <p>
            Our goal is to get back any missing features, do bug fixes and
            eventually fix the visual aspects so it looks more like it used to.
            This will take some time, so please be patient as we work on this
            going forward.
          </p>
        </div>
      </article>

      <article className={cn(styles.rightColon)}>
        <div className={cn(styles.mainBadge)}>
          <p>
            ip-адрес сервера: <b>{AppConstants.serverIpAddress}</b>
          </p>

          <Button
            className={cn('inline-flex gap-[.75em] items-center')}
            style={{
              width: 'max-content',
            }}
          >
            Играть сейчас!
            <svg
              width='1em'
              viewBox='0 0 20 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.5 15.5L10.75 13.6875L15.1875 9.25H0V6.75H15.1875L10.75 2.3125L12.5 0.5L20 8L12.5 15.5Z'
                className={cn('fill-font-light')}
              />
            </svg>
          </Button>

          <OnlineBadge
            digitStyling={{
              fontWeight: 600,
              className: cn('text-primary'),
            }}
            isReversed
            className={cn('self-start')}
          />
        </div>

        <div className={cn(styles.versionBadge)}>
          Версия игры: <b>1.xx.xx</b>
        </div>
      </article>
    </UiContainer>
  );
};

export default AboutServerSection;
