import { publications } from '~/services';

async function getServerSideProps(ctx) {
  const { query } = ctx
  const currentPost = publications.find(publication => {
    return publication.id == query.id
  })

  return {
    props: { currentPost },
  };
}

export default getServerSideProps;
