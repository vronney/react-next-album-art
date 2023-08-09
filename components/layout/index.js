import Header from "../../components/header";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
