import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => (
  <div>
    <Puff
      height="50"
      width="50"
      radius={1}
      color="orange"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      timeout={500}
    />
  </div>
);

export default Loader;
