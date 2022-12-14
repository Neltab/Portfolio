const DisplayCard = (props: {image: string, url?: string}) => (
    <div class="">
        <a href={props.url} class="">
            <img class="card-bg max-w-xs" src={props.image} />
        </a>
    </div>
)

export default DisplayCard