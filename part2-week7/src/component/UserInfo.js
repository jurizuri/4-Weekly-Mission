import { useEffect, useState } from "react";

function UserInfo() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async() => {
      try {
        const api = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        if (!api.ok) {
          throw Error("error");
        }
        const answer = await api.json();
        setUserData(answer);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  // 프로필 데이터가 없는 경우
  if (!userData) {
    return <button className="login">로그인</button>
  }

  // 프로필 이미지랑 이메일 주소
  return (
    <div className="profile">
      <img src="{profileImg}" alt="ProfileImg"/>
      <p className="email">{email}</p>
    </div>
  );
}

export default UserInfo;