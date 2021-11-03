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

service-build: deps
	docker-compose build

service-run: deps
	docker-compose run service sh -c "yarn start"

service-dev: deps
	docker-compose run service sh -c "yarn dev"

$PHONY: deps