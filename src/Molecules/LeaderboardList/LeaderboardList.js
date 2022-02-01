import DOGS from '../../Data/Dummy-data/test-data-dogsRS';
import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import contestsRS from '../../Data/MongoDBMock/contestsRS';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';
import translateExerciseCode2string from './../../Tools/translateExerciseCode2string';

// TODO: import checkIfDisqualified from '../../Tools/checkIfDisqualified';

// This page is a PAST CONTEST LEADERBOARD PAGE http://localhost:3000/contests/contestId/classes/classNumber/leaderboard

const LeaderboardList = ({ contestId, classId, dogName }) => {
  // TODO: let disqualified =
  // checkIfDisqualified({ result }) === true ? 'disqualifiedColor' : '';
  const fakeContest = contestsRS.find((contest) => contest.id === contestId);
  const fakeClassResult = fakeContest.obedienceClasses.find(
    (classObj) => classObj.classNumber === classId,
  );
  let resultsIdArr = fakeClassResult.competingPairs.map(
    (object) => object.summaryId,
  );
  const finalLeaderboardArr = resultsIdArr.map((summaryId) => {
    let fakeDogSummary = individualSummaryInCurrentCompetiton.find(
      (summary) => summary.competingPairsId === summaryId,
    );
    return {
      text: fakeDogSummary.dogName,
      score: fakeDogSummary.summaryResult,
    };
  });
  const sortedLeaderboardClassResults = finalLeaderboardArr.sort(
    (a, b) => b.score - a.score,
  );
  // ===============================================================
  // below code is for displaying dogSummary leaderboard exercises
  const fejkDogName = 'Woof';
  const fejkContest = DOGS.find((obJ) => obJ.dogName === fejkDogName);
  const dogPerformances = fejkContest.performances.find(
    (obJ) => obJ.contestId === contestId,
  );
  const exercisesList = dogPerformances.exercises;
  const dogSummaryResult = exercisesList.map((elem) => {
    return {
      text: translateExerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    };
  });
  // ===============================================================
  //================================================================
  if (dogName === undefined) {
    return (
      // list of leaderboard
      <LeaderboardListStyled>
        {sortedLeaderboardClassResults.map((arrElement, index) => {
          return (
            <LeaderboardListElement
              key={index}
              text={arrElement.text}
              score={arrElement.score}
              index={index}
              // disqualified={disqualified}
            />
          );
        })}
      </LeaderboardListStyled>
    );
  } else
    return (
      <LeaderboardListStyled>
        {dogSummaryResult.map((arrElement, index) => {
          return (
            <LeaderboardListElement
              key={index}
              text={arrElement.text}
              score={arrElement.score}
              index={index}
              // disqualified={disqualified}
            />
          );
        })}
      </LeaderboardListStyled>
    );
};

LeaderboardList.propTypes = {
  // result: propTypes.array.isRequired,
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
};
export default LeaderboardList;
