import AppDataSource from './data-source';
import app from './app';
import ErrorHander from './utils/errorHandler';
import { Admin } from './entity';

const main = async () => {
  await AppDataSource.initialize();
  const noAdmin = await Admin.count({});
  if (!noAdmin) {
    const admin = Admin.create({
      name: process.env.ADMIN_NAME,
      phone_no: process.env.ADMIN_PHNO,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });

    await admin.save();
  }

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
