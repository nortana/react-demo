import { people} from './test7-data.js'
import getImageUrl from './test7-utils.js'

export default function List(){
const listItems = people.map(person =>
  <li key={person.id}>
    <img src={getImageUrl(person)}
     alt={person.name}></img>
     <p>
      <b>{person.name}</b>
      {' '+person.profession+' '}
      因为{person.accomplishment}而闻名世界
     </p>
  </li>
  );
  return (<ul>{listItems}</ul> );
}


