import Markdown from "react-markdown"

export default function Recepie(props) {
    return (
        <section className="recipe">
            <h1>Chef recommends:</h1>
           <Markdown>{props.recipe}</Markdown>
        </section>
    )
}