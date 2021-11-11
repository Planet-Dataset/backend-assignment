DB_USER=root
DB_PASS=pass

backend-build: deps
	docker-compose build

backend-build-slim: deps
	docker-compose -f docker-compose.slim.yml build

backend-up: deps
	docker-compose up

backend-up-slim: deps
	docker-compose -f docker-compose.slim.yml up

backend-down: deps
	docker-compose down

backend-dump: deps
	docker-compose exec -T mongodb sh -c 'mongodump --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} -o /dbdump'

backend-load: deps
	docker-compose exec -T mongodb sh -c 'mongorestore --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} --dir=/dbdump'

backend-dbshell: deps
	docker-compose exec mongodb mongo --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS}

backend-test: deps backend-dump
	echo ""
	make backend-load

$PHONY: deps
