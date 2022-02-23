# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. `docker pull --platform linux/x86_64 mysql`
2. Create database `docker run --name idealix -p 3306:3306 -e MYSQL_ROOT_PASSWORD=idealix@123 -d mysql --default-authentication-plugin=mysql_native_password`
3. Enter in container cli `docker exec -it idealix /bin/sh`
3. Access database `mysql -h localhost -u root -p`
3. Create database `create database idealix;`
3. Setup database settings inside `ormconfig.json` file
4. Create table `npm run typeorm migration:run`
4. Run `npm run start-dev` command
