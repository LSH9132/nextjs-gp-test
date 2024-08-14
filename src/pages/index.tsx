import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async(context) => {
  // 503 상태 코드를 반환
  context.res.statusCode = 503;
  
  // 다른 데이터가 없다면 빈 props 반환
  return {
    props: {}, // 해당 페이지에 필요한 props들
  };
}

const Index = () => {
  return(
    <>
      <h1>
        503 Page has maintenance
      </h1>
    </>
  );
}

export default Index;