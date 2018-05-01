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

const shareUrl = window.location.origin;

const FitnessPlansRanked = ({ data }) => (
  <div>
    <Helmet>
      <title>Your suggested lifting plans</title>
      <meta name="robots" content="noindex" />
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
