async function getServerSideProps() {
  const publications = [
    {
      image: '/assets/img/home-1.png',
      startRating: 360,
      comments: 120,
      description: 'Espaço inteiro: Mobiliado, Área Nobre, 2 Quadras  do Instituo Federal, com garagem.'
    },
    {
      image: '/assets/img/home-1.png',
      startRating: 360,
      comments: 120,
      description: 'Espaço inteiro: Mobiliado, Área Nobre, 2 Quadras  do Instituo Federal, com garagem.'
    }
  ]
  return {
    props: {},
  };
}

export default getServerSideProps;
