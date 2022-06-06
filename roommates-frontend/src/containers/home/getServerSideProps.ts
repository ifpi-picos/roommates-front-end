import { publications } from '~/services'

async function getServerSideProps() {
  const posts = publications;
  return {
    props: { posts },
  };
}

export default getServerSideProps;
