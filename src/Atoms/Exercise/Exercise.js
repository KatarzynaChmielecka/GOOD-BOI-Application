import CLASSES from '../../Data/Dummy-data/test-data-classes';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const Exercise = ({ codeName, obedienceClassName, toggle }) => {
  //We must change codeName (in the future maybe we use ID) to exerciseName of our exercise
  const exerciseName = CLASSES.find(
    (obedienceClass) => obedienceClass.name === obedienceClassName,
  ).exersises.find((exercise) => exercise.codeName === codeName).name;

  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  codeName: propTypes.string,
  obedienceClassName: propTypes.string,
  toggle: PropTypes.bool,
};

export default Exercise;
