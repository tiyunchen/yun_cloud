import React, {useEffect} from 'react'
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
// @ts-ignore
import {PageContainer} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, userInfo } = useModel('global');

  console.log('userInfo1', userInfo)

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
