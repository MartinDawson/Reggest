import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
} from 'react-share';

import styles from './fitnessPlansRanked.less';
import FitnessPlans from './fitnessPlansContainer';
import womanWorkoutImage from '../../wwwroot/images/womanWorkout.jpg';

const shareUrl = window.location.origin;

const FitnessPlansRanked = ({ data }) => (
  <div>
    <Helmet>
      <title>Your suggested lifting plans</title>
      <meta name="googlebot" content="noindex" />
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content="@ReggestOfficial" />
      <meta property="og:title" content="9 simple questions to find the best fitness plan for you. Take the quiz now." />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Not sure what program or routine to do at the gym? Take the fitness quiz to get a fitness plan which best suits your goals." />
      <meta property="og:image" content={womanWorkoutImage} />
      <meta property="og:site_name" content="Reggest.com" />
    </Helmet>
    <div className={styles.socialSharesContainer}>
      <div className={styles.title}>Get your friends into fitness. Share the quiz!</div>
      <div className={styles.socialShares}>
        <FacebookShareButton url={shareUrl} hashtag="#fitness">
          <FacebookIcon size={50} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} hashtags={['fitness']} via="ReggestOfficial">
          <TwitterIcon size={50} />
        </TwitterShareButton>
        <GooglePlusShareButton url={shareUrl}>
          <GooglePlusIcon size={50} />
        </GooglePlusShareButton>
      </div>
    </div>
    <div className={styles.title}>
      <div>Your suggested lifting plans.</div>
    </div>
    <div className={styles.fitnessPlans}>
      <ol>
        <FitnessPlans data={data} />
      </ol>
    </div>
  </div>
);

FitnessPlansRanked.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FitnessPlansRanked;
