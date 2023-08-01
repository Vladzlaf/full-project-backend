export const getListByPageURL = (page: number) => {
  return process.env.RICKANDMORTY_API + `/character?page=${page}`;
};

export const getListDefaultURL = process.env.RICKANDMORTY_API + '/character';
