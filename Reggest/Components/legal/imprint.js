import React from 'react';

import PageContent from '../shared/pageContent';
import styles from './imprint.less';

const Imprint = () => (
  <PageContent>
    <div className={styles.imprintContent}>
      <h1>Imprint</h1>
      <div>Company Name: VAST NETWORK LTD</div>
      <div>Managing Director: Martin Dawson</div>
      <div>Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom</div>
      <div>Telephone: +(44)7473591097</div>
      <div>Email address: info@reggest.com</div>
    </div>
  </PageContent>
);

export default Imprint;
