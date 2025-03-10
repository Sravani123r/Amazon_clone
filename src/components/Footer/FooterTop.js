import React from "react";

const FooterTop = () => {
  return (
    <div className="footer-top" style={{ marginTop: "5vh" }}>
      <div className="w-full py-6" style={{ backgroundColor: "white" }}>
        <div className="w-fill border-t-[1px] border-b-[1px] py-8">
          <div className="w-64 mx-auto text-center flexflex-col gap-1">
            <p className="text-sm" style={{ margin: "-2px",fontSize:"13px" }}>
              <b>See personalised recommendations</b>{" "}
            </p>
            <button
              className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 
            active:bg-yellow-700"
              style={{
                backgroundColor: "#febd69",
                width: "220px",
                height: "30px",
                alignItems: "center",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              Sign in
            </button>
            <p className="text-xs mt-1" style={{paddingBottom:"15px",fontSize:"12px"}}>

              <b> New Customer?</b> <span>Start here.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
