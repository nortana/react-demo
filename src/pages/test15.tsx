export default function Button() {
  function handleClick() {
    alert("你点击了我！");
  }

  return (
    <>
      <button onClick={handleClick}>敲击</button>
      <button
        onClick={function handleClick1() {
          alert("内部点击");
        }}
      >
        内部点击
      </button>
      <button
        onClick={() => {
          alert("超级简洁");
        }}
      >
        省略
      </button>
    </>
  );
}
