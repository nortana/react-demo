function Item({ name = "", isPacked = false }) {
  return (<li className="item">
    {isPacked ? (
      <del>
        {name}{isPacked&&" ✔"}
      </del>
    )
     : (name)}</li>
    );
}

export default function PackingList() {
  return (
    <section>
      <h1>rik 的行李清单</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}
