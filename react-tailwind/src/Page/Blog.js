import React, { Component, setState } from "react";
import Dog from "../IMG/dog.jpg";

let Doggy = [
  {
    index: 1,
    des: "Roti",
    img: "../IMG/dog.jpg",
  },
];

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    let { show } = this.state;
    return (
      <div className="container w-full my-auto h-auto justify-center flex gap-10">
        <div className="rounded-lg h-auto w-64 text-center hover:scale-150 hover:transition mt-10 border-2 border-emerald-600">
          <img src={Dog} class="rounded-lg "></img>
          <span>Roit is husky</span>
        </div>
        <div className="rounded-lg border-2 h-64 w-64 text-center hover:scale-150 hover:transition mt-10">
          <img src={Dog} class="rounded-lg"></img>
          <span>Roit is husky</span>
        </div>
        <div className="rounded-lg border-2 h-64 w-64 text-center hover:scale-150 hover:transition mt-10">
          <img src={Dog} class="rounded-lg"></img>
          <span>Roit is husky</span>
        </div>
        <div className="rounded-lg border-2 h-64 w-64 text-center hover:scale-150 hover:transition mt-10">
          <img src={Dog} class="rounded-lg"></img>
          <span>Roit is husky</span>
        </div>
        <div className="rounded-lg border-2 h-64 w-64 text-center hover:scale-150 hover:transition mt-10">
          <img src={Dog} class="rounded-lg"></img>
          <span>Roit is husky</span>
        </div>
      </div>
    );
  }
}

export default Blog;
