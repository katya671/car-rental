import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ReactLoading type="bubbles" color="var(--blue)" height={50} width={50} />
    </div>
  );
};

export default Loader;
