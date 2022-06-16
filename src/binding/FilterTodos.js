import { connect } from "react-redux";

import { visibilityFilter } from "../redux/filter";

import Footer from "../components/Footer";

const mapStateToProps = (state) => {
  return {
    kindOfFilter: state.filter.kindOfFilter
  }
}
const mapActionsToProps = {
  visibilityFilter
}

export default connect(mapStateToProps, mapActionsToProps) (Footer);
