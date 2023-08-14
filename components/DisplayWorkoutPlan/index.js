import styled from "styled-components";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import ExerciseTracker from "../ExerciseProgressDisplay";
import Link from "next/link";

export default function DisplayWorkoutPlan({ formData }) {

  if(!formData.training_goal){
    return 'No Workout'
  }
  return (
    <Link href="/exercise" style={{ textDecoration: "none" }}>
      <WorkoutPlanWrapper>
        <H3Title>Your current workout plan</H3Title>
        <WorkoutDetailsWrapper>
          <WrapperLeft>
            <WorkoutIcon>
              <Image
                src="/../public/weight-set.png"
                width={40}
                height={40}
                alt="weight"
              />
            </WorkoutIcon>
            <WorkoutGoal>
              Muscle Building
              <br />
              <ExerciseTitle>
                Exercises:{" "}
                {!formData.tData ? "" : formData.tData[0].exercises.length}
              </ExerciseTitle>
            </WorkoutGoal>
          </WrapperLeft>
          <WrapperRight>
            <FaAngleRight />
          </WrapperRight>
        </WorkoutDetailsWrapper>
        <ExerciseTracker formData={formData} />
      </WorkoutPlanWrapper>
    </Link>
  );
}

const ExerciseTitle = styled.div`
  font-weight: 400;
`;

const WrapperLeft = styled.div`
  width: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const WrapperRight = styled.div`
  width: 30%;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 1rem;
`;

const WorkoutDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const WorkoutIcon = styled.div`
  padding-right: 2rem;
`;

const H3Title = styled.h3`
  font-size: 0.8rem;
  text-decoration: none !important;
`;

const WorkoutGoal = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none !important;
`;

const WorkoutPlanWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  border: solid thin var(--b-color-grey);
  padding: 0 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;
  color: #000;
  box-shadow: var(--box-shadow);
`;
