import { useState } from "react";

const Profile = ({ name, studentId, text, profileImage }) => {
  const [score, setScore] = useState(0);

  const clickHandle = (e) => {
    if (e.target.id === "vote-up") {
      if (score < 10) {
        setScore(score + 1);
      } else {
        alert("Cannot Vote more");
      }
    } else if (e.target.id === "vote-down") {
      if (score > 0) {
        setScore(score - 1);
      } else {
        alert("Cannot unvote");
      }
    }
  };

  return (
    <div className='flex flex-col items-center bg-card rounded-xl border-2 border-black w-9/12'>
      <div className='flex w-full pt-5 px-3'>
        <div className='w-9/12'>
          <p className='py-2 text-xl font-bold'>{name}</p>
          <p className='py-2 text-md font-bold'>{studentId}</p>
          <p className='py-2 text-md'>{text}</p>
        </div>
        <div className='flex flex-col items-center w-3/12'>
          <img src={profileImage} alt='profile' className='w-52 rounded-full' />
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <button
          className='p-3 sm:h-8 h-12 m-5 flex justify-center items-center rounded-sm border-1 border-borderClick bg-buttonClick hover:border-black hover:border-1 hover:bg-buttonHover'
          id='vote-up'
          onClick={clickHandle}
        >
          Click to Vote
        </button>
        <div className='p-2 h-12 flex justify-center items-center text-3xl font-bold text-textValue bg-displayValue rounded-md border-2 border-borderValue'>
          {score === 10 ? "MAX" : score === 0 ? "MIN" : score}
        </div>
        <button
          className='p-3 sm:h-8 h-12 m-5 flex justify-center items-center rounded-sm border-1 border-borderClick bg-buttonClick hover:border-black hover:border-1 hover:bg-buttonHover'
          id='vote-down'
          onClick={clickHandle}
        >
          Click to Unvote
        </button>
      </div>
    </div>
  );
};

export default Profile;
