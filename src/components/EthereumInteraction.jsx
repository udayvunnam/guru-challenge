import MainnetConnect from './MainnetConnect';
import MetamaskConnect from './MetamaskConnect';

const EthereumInteraction = ({ wallet, chain, children }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {wallet ? (
        chain === import.meta.env.REACT_APP_CHAIN ? (
          children
        ) : (
          <MainnetConnect />
        )
      ) : (
        <MetamaskConnect />
      )}
    </div>
  );
};

export default EthereumInteraction;
