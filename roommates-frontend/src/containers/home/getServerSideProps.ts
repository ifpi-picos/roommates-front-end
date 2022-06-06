async function getServerSideProps() {
  const publications = [
    {
      id: 100,
      image: 'https://firebasestorage.googleapis.com/v0/b/roommates-aeb96.appspot.com/o/luxury-home-2412145_640%201.svg?alt=media&token=5c714beb-2be7-4657-b56c-ffbb52ce3c87',
      startRating: 360,
      comments: 120,
      description: 'Espaço inteiro: Mobiliado, Área Nobre, 2 Quadras  do Instituo Federal, com garagem.'
    },
    {
      id: 101,
      image: 'https://firebasestorage.googleapis.com/v0/b/roommates-aeb96.appspot.com/o/luxury-home-2412145_640%201.svg?alt=media&token=5c714beb-2be7-4657-b56c-ffbb52ce3c87',
      startRating: 360,
      comments: 120,
      description: 'Espaço inteiro: Mobiliado, Área Nobre, 2 Quadras  do Instituo Federal, com garagem.'
    }
  ]
  return {
    props: { publications },
  };
}

export default getServerSideProps;
