import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  //const [list, setList] = useState(initialList);
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
    //  artwork.seen = nextSeen;
    });
  }

  //function handleToggle(artworkId, nextSeen) {
    // setList(
    //   list.map((artwork) => {
    //     if (artwork.id === artworkId) {
    //       return { ...artwork, seen: nextSeen };
    //     } else {
    //       return artwork;
    //     }
    //   })
    // );
  //}

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle}></ItemList>
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artworks.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            ></input>
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
