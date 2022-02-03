import './App.css';

import { Route, Routes } from 'react-router-dom';

import ClassCompetitorsPage from './PagesBody/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './PagesBody/ClassesPage/ClassesPage';
import ContactFormPage from './PagesBody/ContactFormPage/ContactFormPage';
import ContestDetailsPage from './PagesBody/ContestDetailsPage/ContestDetailsPage';
import ContestsPage from './PagesBody/ContestsPage/ContestsPage';
import DogDataPage from './PagesBody/DogDataPage/DogDataPage';
import DogSummaryPage from './PagesBody/DogSummaryPage/DogSummaryPage';
import ExercisesPage from './PagesBody/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import LandingPage from './PagesBody/LandingPage/LandingPage';
import Layout from './Templates/Layout/Layout';
import LeaderboardPage from './PagesBody/LeaderboardPage/LeaderboardPage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ModalsTest from './PagesBody/ModalsTest';
import NotFoundPage from './PagesBody/NotFoundPage/NotFoundPage';
import ParticipantDataPage from './PagesBody/ParticipantDataPage/ParticipantDataPage';
import ProfilePage from './PagesBody/ProfilePage/ProfilePage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import RolePage from './PagesBody/RolePage/RolePage';
import UnregisteredPage from './PagesBody/UnregisteredPage/UnregisteredPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout withSettings />}>
          <Route path="user" element={<ProfilePage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="forgot" element={<ForgotPassForm />} />
          <Route path="contact-form" element={<ContactFormPage />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="unregistered" element={<UnregisteredPage />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route element={<Layout withLabel />}>
          <Route path="role" element={<RolePage />} />
          <Route path="contests" element={<ContestsPage />} />
          <Route path="contests/:contestId/classes" element={<ClassesPage />} />
          <Route
            path="contests/:contestId/classes/:classId"
            element={<ClassCompetitorsPage />}
          />
          <Route
            path="contests/:contestId/classes/:classId/leaderboard"
            element={<LeaderboardPage />}
          />
          <Route
            path="contests/:contestId/classes/:classId/:dogId"
            element={<ExercisesPage />}
          />
          <Route
            path="contests/:contestId/classes/:classId/:dogId/dog-summary"
            element={<DogSummaryPage />}
          />
          <Route path="dog-data" element={<DogDataPage />} />
          <Route path="participant-data" element={<ParticipantDataPage />} />
          <Route path="contest-details" element={<ContestDetailsPage />} />
        </Route>

        <Route path="modals-test" element={<ModalsTest />} />
      </Routes>
    </div>
  );
}

export default App;
