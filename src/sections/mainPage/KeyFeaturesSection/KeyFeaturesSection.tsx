import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import coinImg from '@/public/key-features/coin.png';
import pvpImg from '@/public/key-features/pvp.png';
import serversImg from '@/public/key-features/servers.png';
import steveAndAlexImg from '@/public/key-features/steve and alex.png';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './KeyFeaturesSection.module.scss';
import type { KeyFeaturesSectionProps } from './KeyFeaturesSection.props';

const KeyFeaturesSection: FC<KeyFeaturesSectionProps> = ({}) => {
  return (
    <div className={cn(styles.sectionWrapper)}>
      <UiContainer className={styles.keyFeatures}>
        <h2>Ключевые особенности</h2>

        <div className={cn(styles.prosSection)}>
          <article className={cn(styles.pros)}>
            <div className={cn(styles.leftColon)}>
              <h3>Совершенно новый игровой опыт Minecraft</h3>

              <div className={cn(styles.textBlock)}>
                <p>
                  На сервере "Cube Vista" вас ожидает уникальный и неизведанный
                  мир Майнкрафта. Откройте для себя кубические приключения,
                  которые вы не найдете нигде более.
                </p>
              </div>
            </div>

            <div className={cn(styles.rightColon)}>
              <Image
                src={steveAndAlexImg}
                alt={'Steve and Alex'}
                priority={true}
              />
            </div>
          </article>

          <article className={cn(styles.pros, styles.reversed)}>
            <div className={cn(styles.leftColon)}>
              <h3>Серверная экономика</h3>

              <div className={cn(styles.textBlock)}>
                <p>
                  Участвуйте в динамичной экономической системе сервера, где вы
                  можете торговать, создавать магазины и накапливать богатство.
                  Станьте крупным предпринимателем или мастером торговли в мире
                  кубических возможностей.
                </p>
              </div>
            </div>

            <div className={cn(styles.rightColon)}>
              <Image
                src={coinImg}
                alt={'Coin'}
                priority={true}
                style={{
                  maxWidth: '75%',
                }}
              />
            </div>
          </article>

          <article className={cn(styles.pros)}>
            <div className={cn(styles.leftColon)}>
              <h3>PVP с таблицей лидеров</h3>

              <div className={cn(styles.textBlock)}>
                <p>
                  Отточите свое мастерство в боях на сервере "Cube Vista" и
                  сразитесь с другими игроками в захватывающих PvP-сражениях.
                  Соревнуйтесь за первое место в таблице лидеров и заслужите
                  славу в мире кубических героев.
                </p>
              </div>
            </div>

            <div
              className={cn(styles.rightColon)}
              style={{
                padding: 0,
                position: 'relative',
                minHeight: '25em',
                background: `url(${pvpImg.src}) center`,
                backgroundSize: 'cover',
              }}
            ></div>
          </article>

          <article className={cn(styles.pros, styles.reversed)}>
            <div className={cn(styles.leftColon)}>
              <h3>Качественный хостинг и стабильность сервера</h3>

              <div className={cn(styles.textBlock)}>
                <p>
                  Мы гарантируем высокую производительность и стабильность
                  сервера, чтобы ваши игровые сессии были максимально
                  комфортными.
                </p>
              </div>
            </div>

            <div
              className={cn(styles.rightColon)}
              style={{
                padding: 0,
                position: 'relative',
                minHeight: '20em',
                background: `url(${serversImg.src}) center`,
                backgroundSize: 'cover',
              }}
            ></div>
          </article>
        </div>
      </UiContainer>
    </div>
  );
};

export default KeyFeaturesSection;
