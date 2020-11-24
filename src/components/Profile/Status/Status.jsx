import React from 'react';

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState( {
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState( {
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }


  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "Нет статуса"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                value={this.state.status}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Status;