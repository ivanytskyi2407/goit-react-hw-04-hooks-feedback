// import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';
const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const percentPositivFeedback = Math.round((100 / totalFeedback) * good);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback} />
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
// class Counter extends React.Component {
//   static totalFeedback = 0;
//   static percentPositivFeedback = 0;

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = name => {
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     this.totalFeedback = good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage() {
//     this.percentPositivFeedback = Math.round(
//       (100 / this.totalFeedback) * this.state.good
//     );
//   }

//   render() {
//     const buttons = Object.keys(this.state);
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={buttons}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.totalFeedback}
//               positivePercentage={this.percentPositivFeedback}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
export default Counter;
