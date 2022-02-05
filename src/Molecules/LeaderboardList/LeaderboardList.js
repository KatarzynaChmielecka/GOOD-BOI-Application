import LeaderboardListElement from '../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import calculateExerciseScore from '../../Tools/calculateExerciseScore';
import checkIfDisqualified from './../../Tools/checkIfDisqualified';
import contests from '../../Data/MongoDBMock/contests';
import individualSummaryInCurrentCompetiton from '../../Data/MongoDBMock/summaryResults';
import propTypes from 'prop-types';
import translateExerciseCode2string from '../../Tools/translateExerciseCode2string';
import { useLocation } from 'react-router-dom';

const LeaderboardList = ({ classId, dogName, contestId }) => {
  const locationPath = useLocation();
  let disqualified;
  checkIfDisqualified ? (disqualified = 'disqualified') : '';
  // if dogName is defined, then render dog-summary leaderboard
  if (dogName) {
    const exercisesList = locationPath.state.dogPerformance.dogPerformance;
    const dogSummaryResult = exercisesList.map((elem) => ({
      text: translateExerciseCode2string(classId, elem.codeName),
      score: calculateExerciseScore(classId, elem.codeName) * elem.result,
    }));
    {
      return (
        <LeaderboardListStyled>
          {dogSummaryResult.map((arrElement, index) => {
            return (
              <LeaderboardListElement
                key={index}
                text={arrElement.text}
                score={arrElement.score}
                index={index}
                disqualified={{ disqualified }}
              />
            );
          })}
        </LeaderboardListStyled>
      );
    }
  } else {
    const contest = contests.find((contest) => contest.contestId === contestId);

    const resultsArr = contest.obedienceClasses[classId];
    if (resultsArr) {
      let resultsIdArr = resultsArr.map((obj) => obj.competingPairsId);

      const finalLeaderboardArr = resultsIdArr.map((competingPairsId) => {
        let DogSummary = individualSummaryInCurrentCompetiton.find(
          (summary) => summary.competingPairsId === competingPairsId,
        );
        return {
          text: DogSummary.dogName,
          score: DogSummary.summaryResult,
        };
      });
      const sortedLeaderboardClassResults = finalLeaderboardArr.sort(
        (a, b) => b.score - a.score,
      );

      return (
        <LeaderboardListStyled>
          {sortedLeaderboardClassResults.map((arrElement, index) => {
            return (
              <LeaderboardListElement
                key={index}
                text={arrElement.text}
                score={arrElement.score}
                index={index}
                disqualified={{ disqualified }}
              />
            );
          })}
        </LeaderboardListStyled>
      );
    } else {
      return (
        <>
          <h2>
            <br></br>Error! Brak danych dla tej kombinacji klasy i psa!
          </h2>
        </>
      );
    }
  }
};

LeaderboardList.propTypes = {
  contestId: propTypes.string,
  classId: propTypes.string,
  dogName: propTypes.string,
  result: propTypes.object,
};
export default LeaderboardList;
