import React from "react";

//tthis is class based component

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 0,
    //     };
    // console.log(this.props.name + "child contructor");
//useState[state,setstate]
    this.state = {
      userInfo: {
        //these dummy data is  like set the initial value of usestate
        name: "dummy",
        location: "default",
      },
    };
  }
//like useEffect()
  async componentDidMount() {
    // console.log(this.props.name + "child did mount");
//api call
    const data = await fetch("https://api.github.com/users/AbiRaj24");

    const json = await data.json();
    console.log(json);
//useState([state,setstate])
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log(this.props.name + "child render")
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;


    //destructuring the json

    const {name,location,bio,avatar_url}=this.state.userInfo;
    return (
      <div className="w-[400px] h-[250px] border-4 border-yellow-300 rounded-2xl m-6 p-4 text-xl">
        {/* <button
          className="bg-black text-white p-2 rounded"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2:this.state.count + 2,
            });
          }}
        >
          Count Increament
        </button> */}
        {/* <h1>
          Count : <span className="font-semibold">{count}</span>
        </h1>
        <h1>Count: <span className="font-semibold">{count2}</span></h1> */}
        <img className="rounded-full w-[100px] h-[100px]" src={avatar_url}/>
        <h1>Name :{name}</h1>
        <h2>Location: {location}</h2 >
        <h2>Bio : {bio}</h2>
      </div>
    );
  }
}

export default UserClass;
