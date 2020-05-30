export default interface User {
  _id: {
    $oid: string;
  };
  name: string;
  lastName: string;
  email: string;
  password: string;
}
