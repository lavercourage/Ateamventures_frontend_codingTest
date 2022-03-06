import MainBoard from "../src/components/main/MainBoard";

const Home = ({ data }) => {
  return (
    <>
      <MainBoard data={data} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/requests");
  const data = await res.json();

  return {
    props: { data },
  };
};
