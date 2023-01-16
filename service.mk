DB_USER=root
DB_PASS=pass

service-build: deps
	docker-compose build

service-run: deps
	docker-compose run service sh -c "yarn start"

service-dev: deps
	docker-compose run service sh -c "yarn dev"

$PHONY: deps
