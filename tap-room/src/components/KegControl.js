import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      currentKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleDeleteKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleSellPintClick = (id) => {
    let updatedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if (updatedKeg.pintsLeft !== 0) {
      updatedKeg.pintsLeft -= 1;
      const updatedMainKegList = this.state.mainKegList.filter(keg => keg.id !== id).concat(updatedKeg);
      this.setState({
        mainKegList: updatedMainKegList
      })
    }
  } 

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonStyle = null;

    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
      buttonStyle = "btn btn-warning mt-2";
    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeleteKeg} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
      buttonStyle = "btn btn-warning mt-2";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
      buttonStyle = "btn btn-danger";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}  onClickingSellPint = {this.handleSellPintClick} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add a new keg!";
      buttonStyle = "btn btn-info mt-2";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className={buttonStyle}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;