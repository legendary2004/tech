
 
 export default function(prop) {
    return (
        <a className="nav-link" aria-current="page" href={prop.link} onClick={prop.click}>{prop.text}</a>
    )
 }