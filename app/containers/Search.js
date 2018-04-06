import { connect } from 'react-redux'
import Search from '../components/Search'

const mapStateToProps = state => {
  return { 
    text: state.marvel.text
  }
}

const SearchContainer = connect(
  mapStateToProps
)(Search)

export default SearchContainer;