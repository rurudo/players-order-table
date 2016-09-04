import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import PositionSelectField from './PositionSelectField';
import NameSelectField from './NameSelectField';
import * as OrderTableActions from '../actions/OrderTableAction';

class Order extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired,
    table: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }
  
  indexText(index) {
    if(index >= 9) {
      return '/';
    }
    return index + 1;
  }
  
  isHidden(name, table) {
    if(name.text == '保留') {
      return false;
    }
    
    if(table.find((row) => {
      return row.name == name.id;
    }) != undefined) {
      return true;
    }
    return false;
  }
  
  hiddenableNames(names, table) {
    const result = [];
    names.forEach(name => {
      
      result.push({
        ...name,
        hidden: this.isHidden(name, table)
      });
    });
    return result;
  }

  render() {
    const { table, actions, names } = this.props;
    const hiddenableNames = this.hiddenableNames(names, table);

    return (
      <section className='main'>
        <Table fixedHeader={true} selectable={false}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>打順</TableHeaderColumn>
              <TableHeaderColumn>守備</TableHeaderColumn>
              <TableHeaderColumn>名前</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}
            stripedRows={true}
          >
            {table.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{this.indexText(index)}</TableRowColumn>
                <TableRowColumn>
                  <PositionSelectField
                    row={row}
                    actions={actions}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <NameSelectField
                    row={row}
                    actions={actions}
                    names={hiddenableNames}
                  />
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    );
  }

}

function mapState(state) {
  return {
    table: state.orderTable,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(OrderTableActions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(Order);
