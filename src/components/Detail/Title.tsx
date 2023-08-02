interface TitleProp {
    title: string;
}

const Title = ({title}: TitleProp) => {
    return (
        <div>
            <h1 className='text-[1rem] font-bold'>{title}</h1>
        </div>
    )
}

export default Title