import React from 'react';
import { Helmet } from 'react-helmet';

import PageContent from '../shared/pageContent';
import styles from './imprint.less';

const Imprint = () => (
  <PageContent>
    <Helmet>
      <title>Imprint</title>
      <meta name="description" content="Contact information for reggest.com." />
    </Helmet>
    <div className={styles.imprintContent}>
      <h1>Imprint</h1>
      <div>Company Name: VAST NETWORK LTD</div>
      <div>Managing Director: Martin Dawson</div>
      <div>Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom</div>
      <div>Telephone: +(44)7473591097</div>
      <div>Email address: u1356770@gmail.com</div>
    </div>
  </PageContent>
);

export default Imprint;
