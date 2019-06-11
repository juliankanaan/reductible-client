import Layout from "../components/Layout"
import Records from "../components/Records"
const helper = require('../helpers/helper.js');

export default function Index() {
  return (
    <div>
      <Layout>
      <Records />
      </Layout>
    </div>
  );
}
