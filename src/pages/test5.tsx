
import Test4 from "./test4"
 function Profile(){
  return (
    <img
      src ="https://lmg.jj20.com/up/allimg/4k/s/02/2109250006343S5-0-lp.jpg"
      alt="美丽风景"
    ></img>
  );
}


export default function Gallery(){
  return (
   
    <section>
       <Test4/>
      <h1>美丽的风景</h1>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </section>
  );
}