import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-zinc-950 flex items-center justify-center">
    <div class="ui-abstergo ">
      <div class="abstergo-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="ui-text">
        Welcome to Docs...
        <div class="ui-dot"></div>
        <div class="ui-dot"></div>
        <div class="ui-dot"></div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
