const people = () => {
  const a = [
    {
      name: "Michael",
      lastname: "McNulty",
      nickname: "Mike",
      dob: new Date("1992-04-19"),
    },
    {
      name: "Jonny",
      lastname: "Marshall",
      nickname: "Jonny",
      dob: new Date("1990-12-12"),
    },
    {
      name: "Jack",
      lastname: "Dubey",
      nickname: "",
      dob: new Date("1992-04-19"),
    },
  ];
  return a;
};

export default people;
