import React, { useMemo } from 'react';
import Proptypes from 'prop-types';

function Title({ title }) {
  const memoTitle = useMemo(() => {
    return title.toLowerCase();
  }, [title]);

  return (
    <h1 style={{ color: 'red', }}>{memoTitle}</h1>
  );
}

Title.defaultProps = {
  title: 'HELLO WOLRD',
};

Title.propTypes = {
  title: Proptypes.string,
};


export default React.memo(Title, (prevProps, nextProps) => prevProps.title === nextProps.title);