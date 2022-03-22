import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CLASSES from '../../Consts/classesConst';
import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ClassCompetitorsPage = () => {
  const [dogList, setDogList] = useState(null);
  const { contestId, classId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDogList() {
      const response = await fetch(
        `/api/contests/participants/${contestId}/${classId}`,
        requestOptionsGET,
      );
      const result = await response.json();
      setDogList(result);
      console.log(result);
    }
    fetchDogList();
  }, []);
  // const dogList = contests.find((contest) => contest.contestId === contestId)
  //   .obedienceClasses[classId];
  const exercisesAmount = CLASSES[classId].exercises.length;

  console.log(dogList);
  function onClassFinishClick() {
    navigate();
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {dogList &&
        dogList.map((dog, index) => {
          const { dogId, dogName, resultsId } = dog;

          /* copetingPairsId ?? = resultsId ? jak sfeczować excersisey? mam id resultu*/
          console.log(resultsId);
          const dogPerformance = dogList.find(
            (dog) => dog.resultsId === resultsId,
          );
          /* const exercisesCompleted = dogPerformance.exercises.filter(
            (exercise) => exercise.result != null,
          ).length; */

          return (
            <ClassOrDogButton
              key={dogId}
              dogInfo={{
                index,
                dogId,
                dogName,
                // exercisesCompleted,
                exercisesAmount,
              }}
            />
          );
        })}
      <MainButton onClick={onClassFinishClick} secondary text="ZAKOŃCZ KLASĘ" />
    </ColumnWrapper>
  );
};

export default ClassCompetitorsPage;
