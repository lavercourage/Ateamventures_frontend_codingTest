import MainBoard from "../src/components/main/MainBoard";

interface IHomeProps {
  data?: any;
}

const Home = ({ data }: IHomeProps) => {
  return (
    <>
      <MainBoard data={data} />
    </>
  );
};

export default Home;

// 데이터 호출
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/requests");
  const data = await res.json();

  return {
    props: { data },
  };
};
