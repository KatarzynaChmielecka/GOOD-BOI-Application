import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import PropTypes from 'prop-types';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import useMediaQuery from '../../Hooks/useMediaQuery';
import ContestDetailsEmptyBarStyled from '../../Atoms/ContestDetailsEmptyBar/ContestDetailsEmptyBarStyled';
import useWindowSize from '../../Hooks/useWindowSize';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [toggle, setToggle] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    async function fetchContestData() {
      const response = await fetch(
        `/api/contests/${contestId}`,
        requestOptionsGET,
      );
      if (response.ok) {
        const result = await response.json();
        setContestData(result);
        setIsPending(false);
      } else {
      }
    }
    fetchContestData();
  }, []);

  useEffect(() => {
    if (size.width > 1024) {
      setToggle(true);
    }
  }, [size]);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ColumnWrapper className="contest-data">
      {isPending && <p>Loading...</p>}
      {contestData && <ContestDetailsMap />}
      <ColumnWrapper className="contest-data-details">
        {contestData && (
          <div className="contest-data">
            <ContestDetailsToggler onClick={toggleHandler} toggle={toggle} />
            {toggle && <ContestDetailsContent contestData={contestData} />}
          </div>
        )}
        {useMediaQuery('(min-width:800px)') && <ContestDetailsEmptyBarStyled />}

        <ColumnWrapper className="contest-data-buttons">
          {useMediaQuery('(min-width:800px)') && (
            <FakeButton
              colors="ternary"
              text="WRÓĆ DO LISTY ZAWODÓW"
              to="/contests"
              className="contest-data-button-back"
            />
          )}
          <FakeButton
            colors="secondary"
            text="ZGŁOŚ SWÓJ UDZIAŁ"
            to="/user-dogs"
            className="contest-data-button-enter"
          />
        </ColumnWrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
