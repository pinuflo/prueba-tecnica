
## Requisitos


```bash
  Postgresql 15+
  node/npm
```



## Installation

Ejecutar los stgtes comandos en consola:

```bash
$ npm install
$ npm install -g artillery
$ npm run typeorm:migration:generate 
$ npm run typeorm:migration:run
```

La base de datos se configura en el .env del repositorio (no fue excluido de git para efectos de la prueba). Se deben ingresar carreras en la tabla "core_career" de forma manual o bien utilizando el SQL del archivo "careers.sql"

## Running the app

```bash
# development
$ npm run start
```
# watch mode
```bash
$ npm run start:dev
```

# stress test
```bash
$ npm run stress-test
```

Las configuraciones de la prueba de carga se encuentran en el archivo "stress-test.yaml". El servidor debe estar en ejecución.



# CURLS

GET

curl --location --request GET 'http://localhost:3200/api/v1/core/student/84'


POST 

curl --location --request POST 'http://localhost:3200/api/v1/core/student' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=dsad' \
--data-urlencode 'rut=10580108-4' \
--data-urlencode 'email=ignasiop@gmail.com' \
--data-urlencode 'id_career=1'

UPDATE

curl --location --request PUT 'http://localhost:3200/api/v1/core/student/81' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=test' \
--data-urlencode 'rut=17118923-3' \
--data-urlencode 'email=ignasiop@gmail.com' \
--data-urlencode 'id_career=2'

DELETE

curl --location --request DELETE 'http://localhost:3200/api/v1/core/student/80' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name='




## License

Nest is [MIT licensed](LICENSE).
