import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const tableData = [
  {
    name: '投',
  },
  {
    name: '捕',
  },
  {
    name: '一塁',
  },
  {
    name: '二塁',
  },
  {
    name: '三塁',
  },
  {
    name: '遊撃',
  },
  {
    name: '左翼',
  },
  {
    name: '中堅',
  },
  {
    name: '右翼',
  },
];

export default class PositionSelectField extends Component {
  static propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleChange = (event, index, value) => {
    this.props.actions.selectPosition(this.props.row.id, value);
  };

  render() {
    const { row } = this.props;

    return (
      <SelectField
        value={row.position}
        hintText="選択"
        onChange={this.handleChange}
        style={{ width: 150}}
      >
        {tableData.map((position, index) =>
          <MenuItem value={index} key={index} primaryText={position.name} />
        )}
      </SelectField>
    );
  }
}
