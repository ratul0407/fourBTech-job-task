interface IProps {
  title: string;
  classes?: string;
}
const Heading = ({ title, classes }: IProps) => {
  console.log(classes);
  return (
    <h2 className={`font-bold lg:text-[40px] text-3xl ${classes}`}>{title}</h2>
  );
};

export default Heading;
