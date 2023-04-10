import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';
const Counter = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const percentPositivFeedback = Math.round((100 / totalFeedback) * good);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        return setFeedback(prevState => ({
          ...prevState,
          good: prevState.good + 1,
        }));

      case 'neutral':
        return setFeedback(prevState => ({
          ...prevState,
          neutral: prevState.neutral + 1,
        }));

      case 'bad':
        return setFeedback(prevState => ({
          ...prevState,
          bad: prevState.bad + 1,
        }));
      default:
        return;
    }
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentPositivFeedback}
          />
        )}
      </Section>
    </div>
  );
};
export default Counter;
