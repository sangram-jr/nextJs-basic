import axios from "axios";


async function getUser() {
  const response=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}

export default async function Home() {
  const userData=await getUser();
  return (
    <div>
      {userData.email}
      <br></br>
      {userData.name}
    </div>
  );
}
