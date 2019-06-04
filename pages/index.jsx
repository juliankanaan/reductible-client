import Layout from "../components/Layout"
const helper = require('../helpers/helper.js');

export default function Index() {
helper.callApi("hi");

  return (
    <div>
      <Layout />
      <p>Hello Next.js</p>


    </div>
  );
}
