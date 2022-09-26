export const config = {
  dev: {
    username: "postgres",
    password: "postgres",
    database: "udagram_restapi",
    host: "localhost",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-ezekiel-dev",
  },
  jwt: {
    secret: "helloworld",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
