
interface DescriptionProps {
  style: string;
  description: string;
}
const Description = ({ style, description }: DescriptionProps) => {
  return (
    <div>
      <h3 className={style}>{description}</h3>
    </div>
  )
}

export default Description
