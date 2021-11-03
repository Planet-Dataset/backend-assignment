# Shell to use for running scripts
SHELL := $(shell which bash)

# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)
deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

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