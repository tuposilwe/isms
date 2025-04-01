import Loading from '@/components/Loading';
import useLoading from '@/hooks/useLoading';
import React from 'react';
import Resultlayout from '../(results)/_layout';

const results = () => {
  const { appIsReady } = useLoading();

  if (!appIsReady) {
    return <Loading visible={true} message="Loading..." />;
  }

  return (
    <Resultlayout/>
  )
}

export default results