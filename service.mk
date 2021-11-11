DB_USER=root
DB_PASS=pass

service-build:
	docker-compose build

service-run:
	docker-compose run service sh -c "yarn start"

service-dev:
	docker-compose run service sh -c "yarn dev"

$PHONY: service-build service-run service-dev
