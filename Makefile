build:
	docker-compose build

install:
	docker-compose run --rm app cnpm install

start:
	docker-compose up

stop:
	docker-compose stop

kill: stop
	docker-compose rm
