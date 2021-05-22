import HashLoader from "react-spinners/HashLoader";

interface IChildComponentProps  {
  loading:boolean,
  color:string
}

const Spinner = (props:IChildComponentProps) => {
  const override = `css
  display: block;
  margin: 0 auto;
`;
  return (
    <HashLoader color={props.color} css={override} loading={props.loading} size={200} />
  );
}

export default Spinner;
