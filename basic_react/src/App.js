import Profile from "./components/profile";

function App() {
  const userDate = [
    {
      name: "นายธนกร ชาญเชิงพานิช",
      studentId: "62010336",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Cursus mattis molestie a iaculis at. Arcu cursus euismod quis viverra nibh cras. Sit amet tellus cras adipiscing enim.",
      // profile: "https://avatars.githubusercontent.com/u/57614928?v=4",
      profile: require("./images/Thanakorn.jfif"),
    },
    {
      name: "นายธนดล สินอนันต์วณิช",
      studentId: "62010345",
      text: "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pretium lectus quam id leo in vitae. Leo a diam sollicitudin tempor id eu nisl nunc mi. Sed euismod nisi porta lorem. Morbi quis commodo odio aenean. Dolor sit amet consectetur adipiscing.",
      // profile: "https://avatars.githubusercontent.com/u/40865904?v=4",
      profile: require("./images/Thanadol.jfif"),
    },
    {
      name: "นายธนา ติ้งประสม",
      studentId: "62010381",
      text: "Elementum eu facilisis sed odio. Velit ut tortor pretium viverra suspendisse potenti nullam. Vitae auctor eu augue ut lectus arcu bibendum at varius. Nulla pharetra diam sit amet. Tincidunt id aliquet risus feugiat in ante metus. Suspendisse ultrices gravida dictum fusce ut.",
      // profile: "https://avatars.githubusercontent.com/u/39361943?v=4",
      profile: require("./images/Thana.jfif"),
    },
    {
      name: "นายปรัชญา ทองแสน",
      studentId: "62010533",
      text: "Eu scelerisque felis imperdiet proin fermentum. Quis commodo odio aenean sed adipiscing diam. Vel quam elementum pulvinar etiam non quam lacus. Gravida arcu ac tortor dignissim convallis aenean et. Sed arcu non odio euismod. Ut sem nulla pharetra diam sit amet.",
      // profile: "https://avatars.githubusercontent.com/u/70775537?v=4",
      profile: require("./images/Prachya.jfif"),
    },
    {
      name: "นายปรัตถกร ศรีบรรยงค์",
      studentId: "62010535",
      text: "Eget lorem dolor sed viverra. Id volutpat lacus laoreet non curabitur gravida arcu ac. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Purus in massa tempor nec feugiat nisl pretium. Magna fringilla urna porttitor rhoncus dolor purus non.",
      //profile: "https://avatars.githubusercontent.com/u/50941709?v=4",
      profile: require("./images/Paratthakorn.jfif"),
    },
  ];

  return (
    <div class='flex flex-col items-center bg-indexBg'>
      <p class='text-2xl font-bold p-10 text-header'>Group's Members</p>
      <div class='flex flex-col items-center pb-20 max-w-card'>
        {userDate.map((e, idx) => (
          <Profile
            name={e.name}
            studentId={e.studentId}
            text={e.text}
            key={idx}
            profileImage={e.profile}
          ></Profile>
        ))}
      </div>
    </div>
  );
}

export default App;
