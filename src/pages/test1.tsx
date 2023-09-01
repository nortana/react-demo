const buttonStyle = {
  width: "80px",
  height: "50px",
};
function Mybutton({ title }: { title: string }) {
  return <button >{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      <Mybutton title="我是一个按钮"></Mybutton>
    </div>
  );
}
