import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      
      height="80"
      width="80"
      radius="9"
      color="#000000"
      ariaLabel="three-dots-loading"
          wrapperStyle={{
            height:"100vh",
            width:"100vw",
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
