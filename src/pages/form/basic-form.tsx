import * as React from 'react';
import { 
  LpCurrency,
  LpPrice,
  LpPercent,
  LpRangePicker,
} from '../../components';

class BasicForm extends React.Component {
  render() {
    return (
      <div>
        <LpCurrency /><br /><br />
        <LpPrice value={10000.111} /><br /><br />
        <LpPrice value={10000.111} size="large" /><br /><br />
        <LpPrice value={10000.111} color={false} /><br /><br />
        <LpPrice value={10000.111} float={false} /><br /><br />
        <LpPercent /><br /><br />
        <LpRangePicker /><br /><br />
      </div>
    );
  }
}

export default BasicForm;