import Layout from "../components/Layout"
import UrlForm from "../components/UrlForm"
import Preview from "../components/Preview"

export default function Text() {
  return (
    <Layout>
      <p>Parse a text file</p>
      <UrlForm />
      <Preview />
    </Layout>
  );
}
