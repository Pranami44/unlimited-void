import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">DOMAIN EXPANSION</h1>
        <p className="text-lg mb-16">
          Web3 login for <span className="text-blue-400">everyone</span>.
        </p>
      </div>
    </div>
  );
};

export default Main;
