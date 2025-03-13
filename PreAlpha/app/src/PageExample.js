import React from "react";
import {Link} from "react-router";

export const PageExample = () => {
  return (
    <div>
        <p>Hello World!</p>
        <p>I am a different page {">"}:D</p>
        <img src="https://i.pinimg.com/736x/d9/9e/72/d99e7228a9753789699ffbdbc382c68c.jpg" />
        <Link to="/"><button>home</button></Link>
        <Link to="/other_page1"><button>Other Page 1</button></Link>
        <Link to="/other_page2"><button>Other Page 2</button></Link>
    </div>
  );
}

export default PageExample;
