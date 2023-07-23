import "./Container.css";

const Container = ({ center, children }) => {
  let classNames = ["Container"];
  if (center) {
    classNames.push("Container--center");
  }
  console.log(`<Container /> rendered!`);
  return <div className="Container Container--center">{children}</div>;
};
export default Container;
