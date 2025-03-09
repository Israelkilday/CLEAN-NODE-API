import { MongoHelper } from "../infra/db/mongodb/helpers/mongodb-helper";
import env from "./config/env";

// MongoHelper.connect(env.mongoUrl)
//   .then(async () => {
//     const app = (await import("./config/app")).default;
//     app.listen(env.port, () =>
//       console.log(`Server running at http://localhost:${env.port}`),
//     );
//   })
//   .catch(console.error);

console.log("Iniciando conexão com MongoDB...");
MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    console.log("MongoDB conectado com sucesso!");
    const app = (await import("./config/app")).default;
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch((error) => {
    console.error("Erro ao conectar com MongoDB:", error);
  });
