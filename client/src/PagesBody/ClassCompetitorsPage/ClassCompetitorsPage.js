import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CLASSES from '../../Consts/classesConst';
import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ErrorComponent from '../ErrorPage/ErrorComponent';
import MainButton from '../../Atoms/MainButton/MainButton';
import { finishClass } from '../../Tools/FetchData/fetchContestsfunctions';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassCompetitorsPage = () => {
  const [dogList, setDogList] = useState(null);
  const [isClassFinished, setIsClassFinished] = useState(null);
  const { contestId, classId } = useParams();
  const navigate = useNavigate();
  const [fetchErrors, setFetchErrors] = useState(null);
  useEffect(() => {
    async function fetchDogList() {
      try {
        const response = await fetch(
          `/api/contests/participants/${contestId}/${classId}`,
          requestOptionsGET,
        );
        if (response && response.status === 200) {
          const forClassObj = await response.json();
          setIsClassFinished(forClassObj.isFinished);
          setDogList(forClassObj.participants);
        } else {
          throw Error(generateErrorMessage(response.status));
        }
      } catch (error) {
        setFetchErrors(error.message);
      }
    }
    fetchDogList();
  }, []);
  const exercisesAmount = CLASSES[classId].exercises.length;

  async function onClassFinishClick(event) {
    event.preventDefault();
    const isSuccess = await finishClass(contestId, classId);
    if (isSuccess) {
      navigate(`/contests/${contestId}/classes`);
    }
  }

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
          <ColumnWrapper
            paddingLeftRight={1}
            paddingTop={0.25}
            maxWidthBigScreen={35}
            className="class-competitors-wrapper grid-position"
          >
            {dogList &&
              dogList.map((dog, index) => {
                const { dogId, dogName, resultsId } = dog;

                const exercisesCompleted = resultsId.exercises.filter(
                  (exercise) => exercise.result != null,
                ).length;

                return (
                  <ClassOrDogButton
                    key={dogId}
                    dogInfo={{
                      index,
                      dogId,
                      dogName,
                      exercisesCompleted,
                      exercisesAmount,
                      results: resultsId,
                    }}
                  />
                );
              })}
            <MainButton
              onClick={onClassFinishClick}
              secondary
              text={isClassFinished ? 'WRÓĆ DO OCENY' : 'ZAKOŃCZ KLASĘ'}
            />
          </ColumnWrapper>
        </>
      )}
    </>
  );
};

export default ClassCompetitorsPage;
