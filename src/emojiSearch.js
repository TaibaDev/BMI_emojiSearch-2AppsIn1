import react, {useState} from 'react'
// import EmojiData from "./emoji.json"
import EmojiData from './components/Emoji.json';
const Emoji=()=>{
    const [search, setSearch]=useState('');

    return(
        <div className="Emoji">
            <input type="text" placeholder="search..." onChange={event=>{setSearch(event.target.value)}}/>
            {EmojiData.filter((val)=>{
                if(search == " "){
                    return val;
                }else if(val.description.toLowerCase().includes(search.toLowerCase())){
                    return val;
                }
            }).map((val, key)=>{
                return <div className='emoji' key={key}>{val.emoji}<span>{val.description}</span></div>;
            })}
        </div>
    )
}

export default Emoji;