import AppDataSource from './data-source';
import app from './app';
import ErrorHander from './utils/errorHandler';

const main = async () => {
  await AppDataSource.initialize();
  app.listen(process.env.PORT, () => {
    console.log('server is started on port 3000..');
  });
};

main()
  .then(() => console.log('done'))
  .catch((err: ErrorHander) => {
    console.log(err.message);
    process.exit(1);
  });
