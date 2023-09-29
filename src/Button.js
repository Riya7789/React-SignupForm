import './App.css';

export default function Button(props){
    return(
    <div class="block-item right">
        <button class={props.color} data-provider="facebook"><img src={props.imageSrc}></img><span>{props.name}</span></button>
    </div>
    );
}