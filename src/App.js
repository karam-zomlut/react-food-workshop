import React from "react";
import DishList from "./Components/DishList";
import CategoryFilter from "./Components/Form/CategoryFilter";
import PriceFilter from "./Components/Form/PriceFilter";
import Search from "./Components/Form/Search";
import dishes from "./data";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

class App extends React.Component {
  state = {
    minPrice: '0',
    maxPrice: '10',
    ctgType: 'all',
    searchValue: '',
    res: dishes
  }

  handleChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    this.setState({[name]: value});
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.res === this.state.res){
      if(this.state.ctgType === 'all'){
        this.setState({res: dishes.filter(ele => ele.price > this.state.minPrice && ele.price < this.state.maxPrice)})
      }
      else {
        this.setState({res: dishes.filter(ele => ele.price > this.state.minPrice && ele.price < this.state.maxPrice && ele.category === this.state.ctgType)})
      }
    }
  }

  
  render() {
    const {minPrice, maxPrice, ctgType, searchValue, res} = this.state;
    return (
      <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <h2>Filters</h2>
        <form>
          <Search searchValue={searchValue} handleChange={this.handleChange} />
          <PriceFilter minPrice={minPrice} maxPrice={maxPrice} handleChange={this.handleChange} />
          <CategoryFilter dishes={dishes} ctgType={ctgType} handleChange={this.handleChange} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        {
          res.length ? <DishList res={res} /> : <h2>There is no Dishes</h2>
        }
      </section>
    </main>
  );
}
}

export default App;
